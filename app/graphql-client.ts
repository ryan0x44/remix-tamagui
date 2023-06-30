import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

export default new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "https://flyby-locations-sub.herokuapp.com/", // from Apollo's Voyage tutorial series (https://www.apollographql.com/tutorials/voyage-part1/)
  }),
});
