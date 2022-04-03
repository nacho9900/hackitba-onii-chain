import { Col, Container, Row } from "react-bootstrap";
import { Wallet } from "./Wallet";
import { Profile, Project, ProjectType } from "../../types";
import { Profile as ProfileComponent } from "../../componets/Profile/Profile";
import { useState } from "react";
import { ProjectsTable } from "../../componets/ProjectTable/ProjectsTable";

import "./InvestorProfile.scss";

const PROFILE: Profile = {
  name: "Leonel Messi",
  bio: "Jugador de futbol 🇦🇷 amateur en Colegiales. Papa de 3 hijos y un perro.",
  imageUrl:
    "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
  scoring: 7,
  location: "Paris, Francia 🇫🇷",
};

const PROJECT_1: Project = {
  id: 0,
  name: "Champions 2007 🏆",
  createdOn: new Date("2007-11-02"),
  startOn: new Date("2007-11-02"),
  category: "Deportes",
  description: "",
  invested: 100000,
  earning: 2540000,
  type: ProjectType.Service,
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU",
};

const PROJECT_2: Project = {
  id: 1,
  name: "Lote de Pelotas Jabulani Mundial 2010 ⚽️",
  createdOn: new Date("2010-05-02"),
  startOn: new Date("2010-06-25"),
  category: "Deportes",
  description: "",
  invested: 1000000,
  earning: 500000,
  type: ProjectType.Service,
  quantity: 500,
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU",
};

const projects = [PROJECT_1, PROJECT_2];

export const InvestorProfile = () => {
  const [profile, setProfile] = useState<Profile>(PROFILE);

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs={8}>
          <ProfileComponent
            name={profile.name}
            bio={profile.bio}
            imageUrl={profile.imageUrl}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Wallet pesos={100000} ubi={2523} usdc={5625} />
        </Col>
      </Row>
      <Row className="project-table-container mt-4">
        <Col xs={12}>
          <h1>Proyectos Invertidos</h1>
        </Col>
        <Col xs={12}>
          <ProjectsTable projects={projects} />
        </Col>
      </Row>
    </Container>
  );
};
