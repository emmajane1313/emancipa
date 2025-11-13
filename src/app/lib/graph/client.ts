import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const emancipaLink = new HttpLink({
  uri: "/api/graphql/emancipa",
});

export const emancipaClient = new ApolloClient({
  link: emancipaLink,
  cache: new InMemoryCache(),
});
