import { FC, useState } from "react";
import { Profile, Project, ProjectType } from "../../types";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./CreditProfile.scss";
import { Profile as ProfileComponent } from "../../componets/Profile/Profile";

const PROFILE: Profile = {
  name: "Leonel Messi",
  bio: "Jugador de futbol 🇦🇷 amateur en Colegiales. Papa de 3 hijos y un perro.",
  imageUrl:
    "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
  scoring: 7,
  location: "Paris, Francia 🇫🇷",
};

const PROJECT_1: Project = {
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

const PROJECTS = [PROJECT_1, PROJECT_2];

export const CreditProfile: FC<{}> = () => {
  const [profile, setProfile] = useState<Profile>(PROFILE);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  return (
    <>
      <Container className="profile-container" fluid>
        <Row>
          <Col xs={12} className="d-flex justify-content-center pt-2">
            <ProfileComponent
              name={profile.name}
              bio={profile.bio}
              scoring={profile.scoring}
              imageUrl={profile.imageUrl}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="px-5">
            <h1>Proyectos</h1>
          </Col>
          <Col xs={12} className="px-5">
            <Table striped bordered>
              <thead>
                <th>Nombre</th>
                <th>Creado En</th>
                <th>Comenzo En</th>
                <th># Productos</th>
                <th>Inversion</th>
                <th>Ganancia</th>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr>
                    <td>{project.name}</td>
                    <td>{project.createdOn.toISOString()}</td>
                    <td>{project.startOn.toISOString()}</td>
                    <td>
                      {project.quantity !== undefined ? project.quantity : "-"}
                    </td>
                    <td className="text-end">${project.invested}</td>
                    <td className="text-end">${project.earning}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
