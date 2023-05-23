import { gql } from "@apollo/client";

export const CONTINENTS = gql`
query {
  continents {
    code
    name
  }
}
`;

export const COUNTRIES = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emoji
      }
    }
  }
`;
