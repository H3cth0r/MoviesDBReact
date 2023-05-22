
import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
`;
export const MainSubWrapper = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px; /* Adjust the gap value as needed */
    justify-items: center;
`;