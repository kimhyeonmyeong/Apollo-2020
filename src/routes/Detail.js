import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

export default () => {
  const { id } = useParams();
  console.log(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  console.log(loading, data);

  if (loading) {
    console.log(loading, data);
    return "loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};
