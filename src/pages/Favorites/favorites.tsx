import { MovieCard } from "components/MovieCard";
import React, { useEffect, useState } from "react";
import { MainSubWrapper } from "./styles";
import { MainWrapper } from "pages/MovieSelection/styles";

const Favorites = () => {
    const [movies, setMovies] = useState<any[]>([]);

    const handleGetFavorites = () => {
        const storedList = localStorage.getItem('favorites-list');
        const listExists = storedList !== null && storedList !== undefined;
        if(listExists){
            const parsedArray: any[] = JSON.parse(storedList);
            console.log(parsedArray);
            setMovies(parsedArray);
        }
    }

    useEffect(() => {
        handleGetFavorites();
    }, []);

    return(
        <MainWrapper>
            <MainSubWrapper>

            {movies?.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard
                    key={movie.id}
                    path={movie.poster_path}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    genreId={movie.genres[0].id}
                    movieId={movie.id}
                    />
                ))
            ) : (
                <p>None</p>
            )
            
            }
            </MainSubWrapper>
        </MainWrapper>
    );
}
export default Favorites;