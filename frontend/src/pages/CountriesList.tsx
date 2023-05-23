import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from "../graphql/gql";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

interface ICountry {
  code: string;
  name: string;
  emoji: string;
}

function CountriesList() {
  const { code } = useParams();
  const { loading, error, data } = useQuery(COUNTRIES, {
    variables: { code: code },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error !</p>;

  return (
    data && (
      <Container className="text-center">
        <h1>Countries:</h1>
        <Row>
          {data.continent.countries.map((country: ICountry) => (
            <Col key={country.name} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card key={country.name} style={{ height: '10rem' }}>
                <Link
                  to={`/continent/${code}/country/${country.code}`}
                  className="link-continent"
                >
                  <Card.Body>
                    <h2 className="small">{country.name}</h2>
                    <h3>{country.emoji}</h3>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        <Link to="/" className="link-continent">
          <Button className="my-3">Back to continents list</Button>
        </Link>
      </Container>
    )
  );
}

export default CountriesList;
