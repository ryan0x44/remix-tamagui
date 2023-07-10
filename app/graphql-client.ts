import { GraphQLClient } from 'graphql-request';

export default new GraphQLClient(
  'https://flyby-locations-sub.herokuapp.com/',
  // @see https://github.com/remix-run/remix/issues/2075#issuecomment-1048934060
  { fetch: fetch }
);
