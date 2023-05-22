import React from "react";
import { MovieCard } from "components/MovieCard";
import { movies } from "constants/moviesMock";
import { MainContainer, SectionContainer, SubMainContainer, Subtitle } from "./styles";
import { MovieCarousel } from "components/MovieCarousel";

const Home = () => {

  return (
    <div>
      <MainContainer>
        <SubMainContainer>

          <SectionContainer>
            <Subtitle>Popular</Subtitle> 
            <MovieCarousel
              movsOptions="popular"
            />
          </SectionContainer>

          <SectionContainer>
            <Subtitle>Top Rated</Subtitle>
            <MovieCarousel
              movsOptions="top-rated"
            />
          </SectionContainer>

          <SectionContainer>
            <Subtitle>Now Playing </Subtitle>
            <MovieCarousel
              movsOptions="now-playing"
            />
          </SectionContainer>

        </SubMainContainer>
      </MainContainer>
    </div>
  );
}
export default Home;