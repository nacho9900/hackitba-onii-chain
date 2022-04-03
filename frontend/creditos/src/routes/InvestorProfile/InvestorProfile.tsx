import { Col, Container, Row } from "react-bootstrap";
import { Wallet } from "./Wallet";
import { Profile } from "../../types";
import { Profile as ProfileComponent } from "../../componets/Profile/Profile";
import { useState } from "react";

const PROFILE: Profile = {
  name: "Leonel Messi",
  bio: "Jugador de futbol 🇦🇷 amateur en Colegiales. Papa de 3 hijos y un perro.",
  imageUrl:
    "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
  scoring: 7,
  location: "Paris, Francia 🇫🇷",
};

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
    </Container>
  );
};
