import "./CryptoTransfer.scss";
import logo from "./img/logo.svg";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useMetaMask } from "metamask-react";

export default function CryptoTransfer() {

    const { status, connect, account, chainId, ethereum } = useMetaMask();

    const getMetamaskMsg = (status: string) => {
        switch (status) {
            case "initializing":
                return (<div className="address">Synchronisation with MetaMask ongoing...</div>);
            case "unavailable":
                return (<div className="address">MetaMask not available :(</div>);
            case "notConnected":
                return (<button className="button" onClick={connect}>Connect to MetaMask</button>);
            case "connecting":
                return (<div className="address">Connecting...</div>);
            case "connected":
                return (<div className="address">Connected account {account} on chain ID {chainId}</div>);
            default:
                return (<div>default(</div>);
        }
    }

    return (

        <Container className="justify-content-center pt-5 px-10">
            <Row className="projects-container justify-content-center">
                <Col>
                </Col>
                <Col className="justify-content-center">
                    <h1>Retirar</h1>
                </Col>
            </Row>
            <Row className="projects-container justify-content-center">
                <Col className="py-1 justify-content-center">
                    <div className="d-flex d-inline">
                        <img width={50} height={50} src={logo} />
                        {getMetamaskMsg(status)}
                        <form>
                            <h3>Ingresar</h3>
                            <div className="form-group">
                                <label>Monto a retirar</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="monto"
                                    name="monto"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block">
                                    Procesar
                                </button>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>


    );




}
