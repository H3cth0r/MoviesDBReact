import React from "react";
import { IMAGE_SOURCE } from "constants/moviesMock";
import genres from "constants/genres.json";
import { MovieCardProp } from "./types";
import { ImageContainer, InfoShow, ShowBox, ShowCalification, ShowLabel, ShowLabelTitle, ShowThumb, ShowTitle } from "./styles";
import { Pill } from "components/Pill";
import { useLocation } from "react-router-dom";


const MovieCard: React.FC<MovieCardProp> = ({
  path,
  title,
  voteAverage,
  genreId,
  movieId,
}) => {
  const poster = IMAGE_SOURCE + path;

    const loc = useLocation();
    const isAdminRoute = loc.pathname.startsWith("/logged");


  const getGenre = (genreId: number) => {
    const key: any = Object.keys(genres.genres).find(
      (genre: any): boolean => genres.genres[genre].id === genreId
    );
    if (key) {
      return genres.genres[key].name;
    }
    return "Not Classified";
  };

  return (
    <ShowBox onClick={() => {
      if(isAdminRoute){
        window.location.href = `/logged/movie-selection/${movieId}`;
      }else{
        window.location.href = `/movie-selection/${movieId}`;
      }
    }}>
      <ImageContainer>
        <ShowThumb src={poster} />
      </ImageContainer>
      <InfoShow>
        <ShowTitle>
          <Pill pillColor="red" genre={getGenre(genreId)} ></Pill>
          <ShowLabelTitle>{title}</ShowLabelTitle>
          <ShowCalification>* {voteAverage} / 10</ShowCalification>
        </ShowTitle>
      </InfoShow>
    </ShowBox>
  );
};

export default MovieCard;
