import React, { useContext, useState } from "react";
import logoUCN from "../public/Escudo-UCN-Full-Color.png";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
import useValidation from "../hooks/useValidation";
import loginValidation from "../validation/loginValidation";
import { ToastContainer, toast } from "react-toastify";
import ingresarSistema from "../hooks/useLogin";
import { useRouter } from "next/router";
import CheckLogin from "../hooks/useCheckLogin";
import { useEffect } from "react";
import { Loader } from "rsuite";

const STATE_INIT = {
  email: "",
  password: "",
};

const login = () => {
  const { signIn, checkLogin } = useContext(AuthContext);
  const [isLoged, setIsLoged] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function verificar() {
      const verificacion = await CheckLogin();
      if (verificacion.rol) {
        checkLogin(verificacion.rol);
        router.push("/intranet");
      } else {
        setIsLoged(false);
      }
    }
    verificar();
  }, []);

  const iniciarSesion = async () => {
    const peticion = await ingresarSistema(email, password, true);

    if (peticion.mensaje === "no autorizado") {
      notify();
      return;
    }

    if (peticion.access_token) {
      signIn(peticion.rol);
      email = "";
      password = "";
      router.push("/intranet");
    }
  };

  const { values, errores, handlerSubmit, handleChange, handlerBlur } =
    useValidation(STATE_INIT, loginValidation, iniciarSesion);

  let { email, password } = values;

  const notify = () => toast.error("Usuario o contraseña incorrecto...");

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
              src="/Imagen-DGE.jpg"
              alt="Logo DGE"
              width="100px"
              height="100px"
              className="login__imagen"
            ></Image>
          </div>
          {/* login form */}
          <form
            className="login__form"
            onSubmit={handlerSubmit}
            noValidate={true}
          >
            <div className="login__inputs">
              <div className="login__input">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@ucn.cl"
                  value={email}
                  onChange={handleChange}
                  onBlur={handlerBlur}
                />
                <label htmlFor="username" className="fas fa-user" />
              </div>
              {errores.email && <p>error en email</p>}
              <div className="login__input">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={handleChange}
                  onBlur={handlerBlur}
                />
                <label htmlFor="password" className="fas fa-key" />
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
      <div>
        <ToastContainer />
      </div>
      {isLoged ? <Loader backdrop content="Cargando..." vertical /> : null}
    </>
  );
};

export default login;
