import Pagina from "@/components/Pagina";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const disney = () => {
  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.disneyapi.dev/character")
      .then((resultado) => setPersonagem(resultado.data.data));
  }, []);

  return (
    <Pagina>
      <h1>API da Disney</h1>
      <Row md={3}>
        {personagem.map((item) => (
          <Col className="mb-3">
            <Card key={item._id}>
              <Card.Img variant="top" src={item.imageUrl} height="200px" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default disney;
