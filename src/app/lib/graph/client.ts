import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const emancipaLink = new HttpLink({
  uri: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.NEXT_PUBLIC_GRAPH_KEY}/subgraphs/id/BC2P8EzxwzRcFKkHijDGd18YcbiFbr7k4sRBq1bPNaWP`,
});

export const emancipaClient = new ApolloClient({
  link: emancipaLink,
  cache: new InMemoryCache(),
});
