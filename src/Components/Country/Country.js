import React from "react";
import { Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
const Country = (props) => {
  const { name, flags } = props.country;
  return (
      <Card style={{ width: "18rem",margin:'1rem' }}>
        <Card.Img variant="top" src={flags.svg} />
        <Card.Body>
          <Card.Title>{name.common}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/country/${name.common}`}> <Button variant="primary">Details</Button></Link>
        </Card.Body>
      </Card>
  );
};

export default Country;
