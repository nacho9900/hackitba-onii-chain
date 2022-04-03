import { Col, Container, Row } from "react-bootstrap";
import { Wallet } from "./Wallet";
import { InvestedCategory, Profile, Project, ProjectType } from "../../types";
import { Profile as ProfileComponent } from "../../componets/Profile/Profile";
import { useState } from "react";
import { ProjectsTable } from "../../componets/ProjectTable/ProjectsTable";

import "./InvestorProfile.scss";
import { InvestedCategoriesTable } from "../../componets/CategoryTable/InvestedCategoriesTable";

const PROFILE: Profile = {
  id: 1,
  name: "Martin Gomez",
  bio: "Inversor moderado.",
  imageUrl:
    "data:image/jpeg;base64,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",
  scoring: 7,
  location: "Cordoba, Argentina",
};

const PROJECT_1: Project = {
  id: 0,
  profileId: 1,
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
  profileId: 1,
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

const INVESTED_CATEGORY_1: InvestedCategory = {
  name: "Deportes",
  investedOn: new Date("2022-01-01"),
  invested: 25000,
  earnings: 40000,
};

const INVESTED_CATEGORY_2: InvestedCategory = {
  name: "Turismo",
  investedOn: new Date("2021-06-10"),
  invested: 100000,
  earnings: 11000,
};

const INVESTED_CATEGORY_3: InvestedCategory = {
  name: "Tecnologia",
  investedOn: new Date("2021-11-30"),
  invested: 10000,
  earnings: 100000,
};

const INVESTED_CATEGORIES: InvestedCategory[] = [
  INVESTED_CATEGORY_1,
  INVESTED_CATEGORY_2,
  INVESTED_CATEGORY_3,
];

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
            profileId={profile.id}
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
      <Row className="project-table-container mt-4">
        <Col xs={12}>
          <h1>Categorias Invertidas</h1>
        </Col>
        <Col xs={12}>
          <InvestedCategoriesTable investedCategories={INVESTED_CATEGORIES} />
        </Col>
      </Row>
    </Container>
  );
};
