
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://flyby-locations-sub.herokuapp.com/",
  documents: "app/*/**.tsx",
  generates: {
    "app/graphql/": {
      preset: "client",
      plugins: []
    },
    "./graphql-schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
