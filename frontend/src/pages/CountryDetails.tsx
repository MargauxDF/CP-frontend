import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { GET_COUNTRY } from "../graphql/gql";
import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function CountryDetails() {
  const { code } = useParams();
  const navigate = useNavigate();
  
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: code }
  });
  
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error !</p>;


  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    data && (
      <Container className="text-center">
        <h1>{data.country.name}</h1>
        <ul className="list-unstyled">
          <li>{data.country.emoji}</li>
          <li>Currency : {data.country.currency}</li>
          <li>Capital : {data.country.capital}</li>
        </ul>
        <Button className="my-3" onClick={handleGoBack}>Go back</Button>
      </Container>
    )
  );
}

export default CountryDetails
