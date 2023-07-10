/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
  federation__FieldSet: any;
  link__Import: any;
}

export enum link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  EXECUTION = "EXECUTION",
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  SECURITY = "SECURITY",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  ID: true,
  String: true,
  _Any: true,
  federation__FieldSet: true,
  link__Import: true,
  link__Purpose: true,
};
export const generatedSchema = {
  Location: {
    __typename: { __type: "String!" },
    description: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    photo: { __type: "String!" },
  },
  _Entity: { __typename: { __type: "String!" }, $on: { __type: "$_Entity!" } },
  _Service: { __typename: { __type: "String!" }, sdl: { __type: "String" } },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    _entities: {
      __type: "[_Entity]!",
      __args: { representations: "[_Any!]!" },
    },
    _service: { __type: "_Service!" },
    location: { __type: "Location", __args: { id: "ID!" } },
    locations: { __type: "[Location!]!" },
  },
  subscription: {},
  [SchemaUnionsKey]: { _Entity: ["Location"] },
} as const;

export interface Location {
  __typename?: "Location";
  /**
   * A short description about the location
   */
  description: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  /**
   * The name of the location
   */
  name: ScalarsEnums["String"];
  /**
   * The location's main photo as a URL
   */
  photo: ScalarsEnums["String"];
}

export interface _Entity {
  __typename?: "Location";
  $on: $_Entity;
}

export interface _Service {
  __typename?: "_Service";
  sdl?: Maybe<ScalarsEnums["String"]>;
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  _entities: (args: {
    representations: Array<Scalars["_Any"]>;
  }) => Array<Maybe<_Entity>>;
  _service: _Service;
  /**
   * The details of a specific location
   */
  location: (args: { id: Scalars["ID"] }) => Maybe<Location>;
  /**
   * The full list of locations presented by the Interplanetary Space Tourism department
   */
  locations: Array<Location>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface $_Entity {
  Location?: Location;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  link__Purpose: link__Purpose | undefined;
}
