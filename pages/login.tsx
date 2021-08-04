import React, { useContext, useState, useEffect } from "react";
import logoUCN from "../public/Escudo-UCN-Full-Color.png";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
import useValidation from "../hooks/useValidation";
import loginValidation from "../validation/loginValidation";
import { ToastContainer, toast } from "react-toastify";
import ingresarSistema from "../hooks/useLogin";
import { useRouter } from "next/router";
import CheckLogin from "../hooks/useCheckLogin";
import { Loader } from "rsuite";

const STATE_INIT = {
  email: "",
  password: "",
};

const Login = () => {
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
        notify();
        setIsLoged(false);
      }
    }
    verificar();
  }, []);

  const iniciarSesion = async () => {
    setIsLoged(true);
    const peticion = await ingresarSistema(email, password, true);
    console.log(peticion);
    if (peticion.mensaje === "no autorizado") {
      notify();
      setIsLoged(false);
    } else if (peticion.errors) {
      notify();

      setIsLoged(false);
    }

    if (peticion.access_token) {
      signIn(peticion.rol, peticion.id);
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
            id="formulario"
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

export default Login;
