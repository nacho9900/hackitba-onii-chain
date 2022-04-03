import "./CryptoTransfer.scss";
import logo from "./img/logo.svg";
import { useMetaMask } from "metamask-react";

export default function CryptoTransfer() {

    const { status, connect, account, chainId, ethereum } = useMetaMask();

    const getMetamaskMsg = (status:string) => {
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
        <div className="d-flex d-inline">
            <img width={50} height={50} src={logo} />
            {getMetamaskMsg(status)}
        </div>
    );




}
