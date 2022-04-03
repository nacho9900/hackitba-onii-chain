import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CurrencyCard } from "./CurrencyCard";

import PesosIcon from "./img/pesos.png";
import UbiIcon from "./img/ubi.png";
import UsdcIcon from "./img/usdc.png";

import "./Wallet.scss";

export type WalletProps = {
  pesos: number;
  ubi: number;
  usdc: number;
};

export const Wallet: FC<WalletProps> = ({ pesos, ubi, usdc }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <CurrencyCard
            currencyIcon={PesosIcon}
            currencyName="ARS"
            amount={pesos}
          />
        </Col>
        <Col xs={4}>
          <CurrencyCard
            currencyIcon={UbiIcon}
            currencyName="UBI"
            amount={ubi}
          />
        </Col>
        <Col xs={4}>
          <CurrencyCard
            currencyIcon={UsdcIcon}
            currencyName="USDC"
            amount={usdc}
          />
        </Col>
      </Row>
    </Container>
  );
};
