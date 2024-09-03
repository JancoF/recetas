// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import RecetasList from './components/RecetasList';
import BuscarRecetas from './components/BuscarRecetas';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#272b34', minHeight: '100vh', color: '#ffffff' }}>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Recetas App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Todas las Recetas</Nav.Link>
                <Nav.Link as={Link} to="/buscar">Buscar Recetas</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4" style={{ backgroundColor: '#272b34' }}>
          <Routes>
            <Route path="/" element={<RecetasList />} />
            <Route path="/buscar" element={<BuscarRecetas />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
