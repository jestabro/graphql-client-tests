export const GRAPHQL_ENDPOINT="https://192.168.122.164/graphql";

export const SHOW_QUERY = `
  query ($key: String!, $path: [String!]!) {
    Show(data: {key: $key, path: $path}) {
      errors
      data {
        result
      }
    }
  }
`;
