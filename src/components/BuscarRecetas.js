// src/components/BuscarRecetas.js
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';

function BuscarRecetas() {
  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState([]);
  const [esRecomendacion, setEsRecomendacion] = useState(false);

  const buscarRecetas = () => {
    axios.get(`http://localhost:5268/buscar/${termino}`)
      .then(response => {
        setResultados(response.data.resultados);
        setEsRecomendacion(response.data.esRecomendacion);
      })
      .catch(error => {
        console.error('Error searching recetas:', error);
      });
  };

  return (
    <Container>
      <h1>Buscar Recetas</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Ingrese término de búsqueda"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
        />
        <Button variant="primary" onClick={buscarRecetas}>Buscar</Button>
      </InputGroup>

      {esRecomendacion && <p>No se encontraron resultados exactos. Mostrando recomendaciones:</p>}

      <Row>
        {resultados.map(receta => (
          <Col md={4} key={receta.id} className="mb-4">
            <Card className="shadow-sm" style={{ backgroundColor: '#212529', borderColor: '#3a3f48', color: '#ffffff' }}>
              <Card.Body>
                <Card.Title>{receta.nombre}</Card.Title>
                <Card.Text>
                  Ingredientes: {receta.ingredientes}<br/>
                  Instrucciones: {receta.instrucciones}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BuscarRecetas;
