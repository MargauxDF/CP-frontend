import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
query {
  continents {
    code
    name
  }
}
`;

export const GET_COUNTRIES = gql`
  query Countries($code: ID!) {
    continent(code: $code) {
      countries {
        code
        name
        emoji
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query CountryDetails($code: ID!) {
    country(code: $code) {
      name
      emoji
      currency
      capital
    }
  }
`;
