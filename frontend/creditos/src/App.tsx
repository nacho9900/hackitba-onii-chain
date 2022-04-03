import React, { FC } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { CreditProfile } from "./routes/CreditProfile/CreditProfile";
import "./main.scss";
import Login from "./routes/Login/Login";
import Search from "./routes/Search/Search";
import { InvestorProfile } from "./routes/InvestorProfile/InvestorProfile";

export const App = ({}) => {
  return (
    <React.StrictMode>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="profile">Perfil de Emprendedor</Nav.Link>
            <Nav.Link href="login">Ingresar</Nav.Link>
            <Nav.Link href="search">Buscar Inversiones</Nav.Link>
            <Nav.Link href="investor">Perfil de Inversor</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="main-container">
        <Row>
          <Col xs={12}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="profile" element={<CreditProfile />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<Search />} />
                <Route path="investor" element={<InvestorProfile />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </React.StrictMode>
  );
};
