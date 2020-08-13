import React from "react";
import { useQuery, gql } from "@apollo/client";
import Movie from "../component/Movie";
import styled from "styled-components";

const getMovies = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #009fff, #ec2f4b);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600
  margin-bottom: 30px;
  
`;
const Subtitle = styled.h3`d
  font-size: 29px;
`;

const Loading = styled.div`
  font-size: 17px;
  opacity: 0.7;
  color: #ec2f4b;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -65px;
`;

export default () => {
  const { loading, error, data } = useQuery(getMovies);
  console.log(loading, error, data);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020 Smart</Title>
        <Subtitle>Lovely GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading</Loading>}
      <Movies>
        {!loading &&
          data &&
          data.movies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              isLiked={m.isLiked}
              bg={m.medium_cover_image}
            ></Movie>
          ))}
      </Movies>
    </Container>
  );
};
