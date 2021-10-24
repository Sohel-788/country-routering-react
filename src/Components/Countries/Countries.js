import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Country from "../Country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <Container fluid>
      <Row className='justify-content-center'>
      <h3 className='text-2xl'>Get The Country Information instantly</h3>
          {
            countries.length===0
            ?
            <Spinner animation="border" variant="primary" />
            :
            
              countries.slice(0,20).map(country => (
              <Country 
              country={country}
              key={country.cca2}
              ></Country>
            ))
          }
      </Row>
    </Container>
  );
};

export default Countries;
