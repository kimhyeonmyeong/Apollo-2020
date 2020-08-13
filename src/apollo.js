import { ApolloClient, InMemoryCache } from "@apollo/client";
import { VariablesAreInputTypesRule } from "graphql";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, variables, { cache }) => {
        cache.modify({
          id: cache.identify({
            __typename: "MovieId",
            id: variables.id,
          }),
          data: {
            isLiked: true,
          },
        });
        console.log(cache.write);
      },
    },
  },
});

export default client;
