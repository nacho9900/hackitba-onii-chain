import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.scss";
import logo from "./logo.svg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/login">login</Link> |{" "}
        <Link to="/search">Search</Link>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
          </p>
        </Alert>
      </header>
    </div>
  );
}

export default App;
