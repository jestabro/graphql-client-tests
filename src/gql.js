export const GRAPHQL_ENDPOINT="https://192.168.122.161/graphql";

export const SHOW_QUERY = `
  query ($path: [String!]!) {
    Show(data: {path: $path}) {
      errors
      data {
        result
      }
    }
  }
`;
