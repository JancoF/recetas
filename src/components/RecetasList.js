// src/components/RecetasList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

function RecetasList() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5268/recetas')
      .then(response => {
        setRecetas(response.data);
      })
      .catch(error => {
        console.error('Error fetching recetas:', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {recetas.map(receta => (
          <Col md={4} key={receta.id} className="mb-4">
            <Card className="shadow-sm" style={{ backgroundColor: '#212529', borderColor: '#3a3f48' , color: '#ffffff'}}>
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

export default RecetasList;
