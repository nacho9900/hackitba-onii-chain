import { FC, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getProfileProjects, MOCKED_PROFILES, MOCKED_PROJECTS } from "src/mocks/mocks";
import { Profile as ProfileComponent } from "../../componets/Profile/Profile";
import { ProjectsTable } from "../../componets/ProjectTable/ProjectsTable";
import { Profile, Project } from "../../types";
import "./CreditProfile.scss";

export const CreditProfile: FC<{}> = () => {

  let { profileId } = useParams();

  profileId = profileId ? profileId : "1";

  const [profile, setProfile] = useState<Profile>(MOCKED_PROFILES[profileId]);
  const [projects, setProjects] = useState<Project[]>(Object.values(getProfileProjects(parseInt(profileId))));

  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center pt-2">
          <Col xs={8}>
            <ProfileComponent
              name={profile.name}
              bio={profile.bio}
              scoring={profile.scoring}
              imageUrl={profile.imageUrl}
              profileId={profile.id}
            />
          </Col>
        </Row>
        <Row className="projects-container">
          <Col xs={12} className="px-5">
            <h1>Mis Proyectos</h1>
          </Col>
          <Col xs={12} className="px-5">
            <ProjectsTable projects={projects} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
