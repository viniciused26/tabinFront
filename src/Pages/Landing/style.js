import styled from "styled-components";
import LandImg from '../../assets/land.png';
import LandImg2 from '../../assets/land2.png';

const Page = styled.div`
    display: block;
    overflow: auto;
`;

const ContainerWithImg = styled.div`
    text-align: center;
    background-image: url(${LandImg});
    background-size: cover;
`;

const ContainerWithImg2 = styled.div`
    text-align: center;
    background-image: url(${LandImg2});
    background-size: cover;
`;

const Container = styled.div`
    text-align: center;
    background-size: cover;
`;

export { Page, ContainerWithImg, Container, ContainerWithImg2 };