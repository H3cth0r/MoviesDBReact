import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getPopular } from "services";
import { MovieCard } from "components/MovieCard";
import { MainSubWrapper, MainWrapper } from "./styles";

type PopularProps = {
    texto: string;
}

const Popular = ({texto}: PopularProps) => {
    const [movies, setMovies] = useState<any[]>([]);

    const getPopularMovies = async () => {
        await getPopular().then((res) => {
            if(res && res.data){
                console.log(res.data, "data");
                setMovies(res.data.results);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getPopularMovies();
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
                    genreId={movie.genre_ids[0]}
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
export default Popular;