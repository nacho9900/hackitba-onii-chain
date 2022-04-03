import { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./CurrencyCard.scss";

export type CurrencyCardProps = {
  currencyIcon: string;
  currencyName: string;
  amount: number;
};

export const CurrencyCard: FC<CurrencyCardProps> = ({
  currencyIcon,
  currencyName,
  amount,
}) => {
  return (
    <Container className="currency-card pt-2" fluid>
      <Row>
        <Col xs={12} className="d-flex d-inline">
          <img
            src={currencyIcon}
            alt={currencyName}
            className="currency-icon mt-1"
          />
          <h3 className="mx-2">{currencyName}</h3>
          <h3 className="text-end">{amount}</h3>
        </Col>
        <Row className="my-3">
          <Col xs={6}>
            <Button variant="success" className="w-100">
              Ingresar
            </Button>
          </Col>
          <Col xs={6}>
            <Button variant="primary" className="w-100">
              Extraer
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
