import React, { FC } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import { CreditProfile } from "./routes/credit-profile/CreditProfile";
import "./main.scss";

export const App = ({}) => {
  return (
    <React.StrictMode>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="profile">Perfil de Inversor</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="main-container">
        <Row>
          <Col xs={12}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="profile" element={<CreditProfile />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </React.StrictMode>
  );
};
