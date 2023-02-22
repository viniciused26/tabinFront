import styled from "styled-components";

const Page = styled.div`
    display: inline;
    width: auto;
    height: 100%;
    background: white;
`;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0.5rem;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
    grid-gap: 1rem;
    margin-block: 1rem;
    margin: 0.5rem;
    justify-content: space-evenly;
`;

export { Page, Container, CardContainer };