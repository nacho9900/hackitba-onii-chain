import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./main.scss";
import { CreditProfile } from "./routes/CreditProfile/CreditProfile";
import Login from "./routes/Login/Login";
import Search from "./routes/Search/Search";
import CryptoTransfer from "./routes/CryptoTransfer/CryptoTransfer";
import ProjectView from "./routes/Project/ProjectView";
import { InvestorProfile } from "./routes/InvestorProfile/InvestorProfile";
import { InvestOnCategories } from "./routes/InvestOnCategories/InvestOnCategories";
import Logo from "./img/logo.jpeg";

export const App = ({}) => {
  return (
    <React.StrictMode>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} height="50" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Ingresar</Nav.Link>
            <Nav.Link href="/investor">Mi Perfil</Nav.Link>
            <Nav.Link href="/search">Buscar Proyectos</Nav.Link>
            <Nav.Link href="/categories">Invertir en Categorias</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="main-container">
        <Row>
          <Col xs={12}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="profile/:profileId" element={<CreditProfile />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<Search />} />
                <Route path="cryptotransfer" element={<CryptoTransfer />} />
                <Route path="project/:projectId" element={<ProjectView />} />
                <Route path="investor" element={<InvestorProfile />} />
                <Route path="categories" element={<InvestOnCategories />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </React.StrictMode>
  );
};
