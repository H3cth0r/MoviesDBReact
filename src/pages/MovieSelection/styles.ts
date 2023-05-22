import styled from "styled-components";

export const GeneralText = styled.p`
    margin: 0%;
    padding: 0%;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    // background-color: red;
`;
export const MainSubWrapper = styled.div`
    width: 90%;
    // background-color: blue;
`;
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    // background-color: yellow;
    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        flex-direction: column;
        align-items: center;
    }
`;
export const MovieImageWrapper = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: bisque;
    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        width: 70%;
        padding-bottom: 5%;
    }
`;
export const MovieImage = styled.img`
    width: 80%;
    border-radius: 10px;
`;
export const MovieInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    // background-color: brown;
`;
export const MovieTitle = styled(GeneralText)`
    font-weight: bolder;
    font-size: larger;
`;
export const IconTagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        padding-top: 5%;
    }
`;
export const IconAndText = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 5%;
`;
export const TagsText = styled(GeneralText)`
    padding-left: 5px;
`;
export const TextMovieInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // background-color: aquamarine;
    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        padding-top: 5%;
    }
`;
export const MovieSummary = styled(GeneralText)`

`;
export const MovieTagLine = styled(GeneralText)`
    padding-top: 5%;
`;
export const GenresAndFavoriteWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        padding-top: 5%;
    }
`;
export const GenresList = styled.div`
    width: 50%;
`;
export const SelectionSubtitle = styled(GeneralText)`
    padding-bottom: 3%;
    font-size: medium;
    font-weight: bolder;
`;
export const RecommendationsCarousel = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 3%;
`;