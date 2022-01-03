export const GRAPHQL_ENDPOINT="https://elete.xyz/graphql";

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

export const CONFIG_FILE_SAVE_MUTATION = `
  mutation ($fileName: String) {
    SaveConfigFile(data: {fileName: $fileName}) {
      errors
      data {
        fileName
      }
    }
  }
`;
