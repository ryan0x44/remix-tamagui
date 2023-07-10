import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { graphql } from '../graphql/gql';
import { gql, GraphQLClient, request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const locationsQuery = gql`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`;

export async function loader() {
  const client = new GraphQLClient(
    'https://flyby-locations-sub.herokuapp.com/',
    // @see https://github.com/remix-run/remix/issues/2075#issuecomment-1048934060
    { fetch: fetch }
  );
  return await client.request(locationsQuery)
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div>
        { JSON.stringify(data.locations) }
      </div>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
