import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      language
      rating
      isLiked @client
    }
    suggestion(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(45deg, #12c2e9, 10%, #c471ed, #f64f59);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 45%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 28px;
`;
const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default () => {
  const { id } = useParams();
  console.log(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  console.log(data);
  return (
    <Container>
      <Column>
        <Title>{!loading ? data.movie.title : "Loading..."}</Title>
        {!loading && (
          <>
            <Subtitle>
              {data?.movie?.language} · ☆ {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster bg={data?.movie?.medium_cover_image} />
    </Container>
  );
};
