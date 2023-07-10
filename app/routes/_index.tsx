import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { graphql } from '../graphql/gql';
// import { Location } from '../graphql/graphql';
import { Query } from '../graphql/graphql';
import graphqlClient from '../graphql-client';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const locationsQuery = graphql(`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`);

export async function loader() {
  return await graphqlClient.request(locationsQuery)
}

export default function Index() {
  //const { locations } = useLoaderData() as { locations: Array<Location> };
  const data = useLoaderData() as Query;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div>
        <ol>
          {data.locations.map((location) => (
            <li key={location.id ?? "0"}>{location.name}</li>
          ))}
        </ol>
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
