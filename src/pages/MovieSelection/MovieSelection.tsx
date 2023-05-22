import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentWrapper, GenresAndFavoriteWrapper, GenresList, IconAndText, IconTagsWrapper, MainSubWrapper, MainWrapper, MovieImage, MovieImageWrapper, MovieInformationWrapper, MovieSummary, MovieTagLine, MovieTitle, RecommendationsCarousel, SelectionSubtitle, TagsText, TextMovieInformation } from "./styles";
import { getMovie, getRecommendations } from "services";
import { AccessTime, AutoGraph, CalendarMonth, FamilyRestroom, GroupAdd, Star } from "@mui/icons-material";
import { IMAGE_SOURCE } from "constants/moviesMock";
import { Pill } from "components/Pill";
import { Movie } from "./types";
import { Button } from "@mui/material";
import { MovieCarousel } from "components/MovieCarousel";

const MovieSelection = () => {

    const { movieIdProp } = useParams();
    const [movie, setMovie] = useState<Movie>();
    const [isFavorite, setIsFavorite] = useState(false);
    const [recommendations, setRecommenations] = useState();

    const getOneMovie = async () => {
        await getMovie(movieIdProp).then((res) => {
            if(res && res.data){
                console.log(res.data, "data");
                setMovie(res.data);
                handleCheckIfInFavorites(res.data.id);
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleSaveToFavorites = (objToAppend: any) => {
        const storedList = localStorage.getItem('favorites-list');
        const listExists = storedList !== null && storedList !== undefined;
        if(listExists){
            const parsedArray = JSON.parse(storedList);
            parsedArray.push(objToAppend);
            localStorage.setItem('favorites-list', JSON.stringify(parsedArray));
        }else{
            const newFavorites = [];
            newFavorites.push(objToAppend);
            localStorage.setItem('favorites-list', JSON.stringify(newFavorites));
        }
    }
    const handleRemoveFromFavorite = () => {
        const storedList = localStorage.getItem('favorites-list');
        const listExists = storedList !== null && storedList !== undefined;
        if (listExists) {
            const parsedArray: any[] = JSON.parse(storedList);
      
            if(movie){
                const updatedArray = parsedArray.filter(obj => obj.id !== movie.id);
                localStorage.setItem('favorites-list', JSON.stringify(updatedArray));
            }
        } 
    }
    const handleCheckIfInFavorites = (movieId: number) => {
        const storedList = localStorage.getItem('favorites-list');
        const listExists = storedList !== null && storedList !== undefined;
        if(listExists){
            const parsedArray: any[] = JSON.parse(storedList);
            const isFavorite = parsedArray.some(obj => obj.id === movieId);
            setIsFavorite(isFavorite);
        }
    }
    const getRecommendationsMovies = async () => {
        await getRecommendations(movieIdProp).then((res) => {
            if(res && res.data){
                console.log(res.data.results, "recommdations");
                setRecommenations(res.data.results);
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleClickIsFavorite = () => {
        if(!isFavorite){
            handleSaveToFavorites(movie);
            setIsFavorite(true);
        }else{
            handleRemoveFromFavorite();
            setIsFavorite(false);
        }
    }

    useEffect(() => {
        getOneMovie();
        getRecommendationsMovies();
    }, []);

    return(
        <MainWrapper>
            <MainSubWrapper>
                {movie ? (
                    <ContentWrapper>
                        <MovieImageWrapper>
                            <MovieImage src={IMAGE_SOURCE+movie.poster_path}></MovieImage>
                        </MovieImageWrapper>
                        <MovieInformationWrapper>
                            <MovieTitle>{movie.original_title}</MovieTitle>
                            <IconTagsWrapper>
                                <IconAndText>
                                    {movie.adult === false ? (
                                        <>
                                            <FamilyRestroom/>
                                            <TagsText>Family Content</TagsText>
                                        </>
                                    ) : (
                                        <>
                                            <GroupAdd/>
                                            <TagsText> +18 Content</TagsText>
                                        </>
                                    )}
                                </IconAndText>
                                <IconAndText>
                                    <AccessTime/>
                                    <TagsText>{movie.runtime}</TagsText>
                                </IconAndText>
                                <IconAndText>
                                    <CalendarMonth/>
                                    <TagsText>{new Date(movie.release_date).getFullYear()}</TagsText>
                                </IconAndText>
                                <IconAndText>
                                    <Star/>
                                    <TagsText>{movie.vote_average}</TagsText>
                                </IconAndText>
                                <IconAndText>
                                    <AutoGraph/>
                                    <TagsText>{movie.vote_count}</TagsText>
                                </IconAndText>
                            </IconTagsWrapper>
                            
                            <TextMovieInformation>
                                <MovieSummary>
                                    {movie.overview}
                                </MovieSummary>
                                <MovieTagLine>
                                    "{movie.tagline}"
                                </MovieTagLine>
                            </TextMovieInformation>
                            
                            <GenresAndFavoriteWrapper>
                                        <GenresList>
                                            <SelectionSubtitle>Genres</SelectionSubtitle>
                                            {movie.genres.map((genre) => (
                                                <Pill
                                                    pillColor="red"
                                                    genre={genre.name}
                                                ></Pill>
                                            ))}    
                                        </GenresList>
                                        <GenresList>
                                            <SelectionSubtitle>Favorites</SelectionSubtitle>
                                            {
                                                isFavorite ? (
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleClickIsFavorite}
                                                    >
                                                        Remove from Favorites
                                                    </Button>
                                                ) : (
                                                    <Button 
                                                        variant="outlined"
                                                        onClick={handleClickIsFavorite}
                                                    >
                                                       Add to Favorites 
                                                    </Button>
                                                )
                                            }
                                        </GenresList>
                            </GenresAndFavoriteWrapper>
                        </MovieInformationWrapper>
                    </ContentWrapper>
                ) : (
                    <ContentWrapper></ContentWrapper>
                )}
                <RecommendationsCarousel>
                    <SelectionSubtitle>Recommendations</SelectionSubtitle>
                    {
                        recommendations ? (
                            <MovieCarousel 
                                movsOptions="own-list"
                                ownlist={recommendations}
                            />
                        ) : (
                            <></>
                        )
                    }
                </RecommendationsCarousel>
            </MainSubWrapper>
        </MainWrapper>
    );
}
export default MovieSelection;