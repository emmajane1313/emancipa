import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const emancipaLink = new HttpLink({
  uri: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.NEXT_PUBLIC_GRAPH_KEY}/subgraphs/id/6cvPKEkFN2Xd6nJrokr4xkUajYK4YRk27RhtTduehemW`,
});

export const emancipaClient = new ApolloClient({
  link: emancipaLink,
  cache: new InMemoryCache(),
});
