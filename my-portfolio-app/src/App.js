import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import React from "react";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <NavigationBar/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
