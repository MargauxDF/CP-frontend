import React from "react";
import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { GET_CONTINENTS } from "../graphql/gql";

interface IContinent {
  code: string;
  name: string;
}

function ContinentsList() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error !</p>;

  return (
    data && (
      <Container className="text-center">
        <h1>Continents :</h1>
        <Row>
          {data.continents.map((continent: IContinent) => (
            <Col xs={12} sm={6} md={4} lg={3} key={continent.code}>
              <Link to={`/continent/${continent.code}`} className="link-continent">
                <div className="bordered-card">{continent.name}</div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    )
  );
}

export default ContinentsList;
