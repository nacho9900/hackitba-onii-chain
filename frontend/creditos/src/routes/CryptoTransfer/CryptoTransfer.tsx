import "./CryptoTransfer.scss";
import logo from "./img/logo.svg";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useMetaMask } from "metamask-react";

export default function CryptoTransfer() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const getMetamaskMsg = (status: string) => {
    switch (status) {
      case "initializing":
        return <div className="address">Sincronizando con MetaMask...</div>;
      case "unavailable":
        return <div className="address">MetaMask no disponible :(</div>;
      case "notConnected":
        return (
          <Button className="button" onClick={connect}>
            Conectar a MetaMask
          </Button>
        );
      case "connecting":
        return (
          <Button className="button" onClick={connect} disabled>
            Conectando...
          </Button>
        );
      case "connected":
        return (
          <Button className="address connected" disabled>
            Ya conectado
          </Button>
        );
      default:
        return <div>default(</div>;
    }
  };

  return (
    <Container className="justify-content-center pt-5 px-10">
      <Row className="d-flex justify-content-center">
        <Col xs={6}>
          <h1 className="text-white">Retirar</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={6}>
          <Container className="crypto-transfer-card" fluid>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="d-flex d-inline justify-content-center">
                  <img width={50} height={50} src={logo} />
                  {getMetamaskMsg(status)}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <form>
                  <div className="form-group">
                    <label>Monto a retirar</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="monto"
                      name="monto"
                    />
                  </div>
                  <div className="mt-2 d-flex justify-content-end">
                    <Button type="submit" variant="primary">
                      Procesar
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
