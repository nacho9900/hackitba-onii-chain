import { FC, useMemo } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

export type ProfileProps = {
  imageUrl: string;
  name: string;
  bio: string;
  scoring?: number;
  clickable?: boolean;
};

export const Profile: FC<ProfileProps> = ({ imageUrl, name, bio, scoring, clickable }) => {
  const progress = useMemo(() => (scoring ? 10 * scoring : 0), [scoring]);

  const containerClass = "profile-container mb-4" + (clickable === true ? ' clickable' : '');

  let navigate = useNavigate();

  const goToProfile = () => {
    if (clickable){
      navigate("/profile", { replace: true });
    }
  }

  return (
    <Container className={containerClass} fluid onClick={() => goToProfile()}>
      <Row>
        <Col xs={12} className="d-flex justify-content-center pt-2">
          <img src={imageUrl} className="image_container" alt="Profile Image" />
        </Col>
        <Col xs={12} className="d-flex justify-content-center pt-2">
          <h1>{name}</h1>
        </Col>
        <Col xs={12} className="d-flex justify-content-center pt-2">
          <p>{bio}</p>
        </Col>
        {scoring && (
          <Col xs={12} className="d-flex justify-content-center pt-2">
            <p>Puntaje Crediticio: {scoring}</p>
          </Col>
        )}
      </Row>
      {scoring && (
        <Row className="d-flex justify-content-center">
          <Col xs={4}>
            <ProgressBar variant="success" now={progress} />
          </Col>
        </Row>
      )}
    </Container>
  );
};
