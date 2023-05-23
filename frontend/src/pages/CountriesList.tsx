import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/gql";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

interface ICountry {
  code: string;
  name: string;
  emoji: string;
}

function CountriesList() {
  const { code } = useParams();

  const [searchCountry, setSearchCountry] = useState<string | undefined>();

  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { code: code },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error !</p>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCountry(e.target.value)
  }

  return (
    data && (
      <Container className="text-center">
        <Form>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Which country are you looking for?" onChange={handleSearch} value={searchCountry} />
          </Form.Group>
        </Form>
        <h1>Countries:</h1>
        <Row>
          {data.continent.countries.filter((country: ICountry) => country.name.toLowerCase().includes(searchCountry ?? "")).map((country: ICountry) => (
            <Col key={country.name} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card key={country.name} style={{ height: "10rem" }}>
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
