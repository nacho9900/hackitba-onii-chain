import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.scss";

export default function Login() {
  const [logData, setLogData] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setLogData({
      ...logData,
      [event.target.name]: event.target.value,
    });
  };

  let navigate = useNavigate();

  const sendData = (event: any) => {
    event.preventDefault();
    console.log("enviando datos..." + logData.user + " " + logData.password);
    navigate("/investor/", { replace: false });
  };

  return (
    // <main style={{ padding: "1rem 0" }}>
    //   <h2>login</h2>
    // </main>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Ingresar</h3>
          <div className="form-group">
            <label>Dirección de email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={handleInputChange}
              name="user"
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Recordar usuario
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={sendData}
          >
            Entrar
          </button>
          <p className="forgot-password text-right">
          <a href="#">¿Olvido su contraseña?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
