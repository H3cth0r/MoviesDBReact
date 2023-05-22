import React, { useEffect, useState } from "react";
import { MainSubWrapper, MainWrapper } from "./styles";
import { MovieCard } from "components/MovieCard";
import { getTopRated } from "services";

const TopRated = () => {
    const [movies, setMovies] = useState<any[]>([]);

    const getTopRatedMovies = async () => {
        await getTopRated().then((res) => {
            if(res && res.data){
                console.log(res.data, "data");
                setMovies(res.data.results);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getTopRatedMovies();
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
export default TopRated;