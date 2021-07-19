
import React, { useState } from "react";
import logoDGE from "../public/Imagen-DGE.jpg";
import logoUCN from "../public/Escudo-UCN-Full-Color.png";
import Image from "next/image";
const login = () => {
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    const user = e.target.username.value;
    const pass = e.target.password.value;
    console.log(user);
    console.log(pass);
  };

  return (
    <>
      <div className="login">
        <div className="login__content">
          <div className="login__imagenes">
            <Image
              src={logoUCN}
              alt="Logo UCN"
              width="100px"
              height="100px"
              className="login__imagen"
            ></Image>
            <Image
              src={logoDGE}
              alt="Logo DGE"
              width="100px"
              height="100px"
              className="login__imagen"
            ></Image>
          </div>
          {/* login form */}
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__inputs">
              <div className="login__input">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Usuario"
                  onChange={() => setError(false)}
                />
                <label htmlFor="username" className="fas fa-user" />
              </div>

              <div className="login__input">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  onChange={() => setError(false)}
                />
                <label htmlFor="password" className="fas fa-key" />
              </div>
              <div hidden={!error} className="login__error">
                <span className="login__error-message">
                  <i className="fas fa-exclamation-triangle" />
                  <span className="login__error-message-text">
                    ¡Usuario o contraseña incorrectos!
                  </span>
                </span>
              </div>
            </div>

            <button type="submit" className="login__button">
              INGRESAR
            </button>
          </form>
          <div className="login__footer">
            Si tiene problemas para ingresar al sistema contactar a
            correo@correo.cl
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
