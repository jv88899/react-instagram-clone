import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const headers = { "x-hasura-admin-secret": "react12-codevo" };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://react-instagram-clone-codevo.herokuapp.com/v1/graphql",
    options: {
      reconnet: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
