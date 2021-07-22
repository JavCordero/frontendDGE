import React, { useState } from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import TitleLine from "../../components/others/TitleLine";
import Recomendaciones from "../../components/salud/Recomendaciones";
import Asistente from "../../components/others/Asistente";

const atencion = () => {
  const [especialidad, setEspecialidad] = useState("");
  const handleEspecialidad = (e) => {
    const especialidad_ = e.target.value;
    setEspecialidad(especialidad_);
  };
  return (
    <>
      <MDBBreadcrumb className="mb-0">
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/salud">Salud</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Solicita Atención Medica</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <Asistente src="/salud/avatar-salud.png">
        Tienes preguntas, has clic acá…
      </Asistente>
      <div className="salud-atencion">
        <img
          className="salud-atencion__fondo"
          src="/salud/fondo-salud.png"
          alt="fondo personas salud"
        />
        <TitleLine className="mb-2">Solicita Atención Medica</TitleLine>
        <div className="salud-atencion__especialidades">
          <div className="salud-atencion__opciones mb-3">
            <div className="salud-atencion__opciones-grupo">
              <button
                value="fonoaudiologia"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#ffaa4d" }}
              >
                Fonoaudiología{" "}
              </button>
              <button
                value="nutricionista"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#00b74f" }}
              >
                Nutricionista{" "}
              </button>
              <button
                value="odontologia"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#00b5e2" }}
              >
                Odontología{" "}
              </button>
              <button
                value="psicologia"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#FFD100" }}
              >
                Psicología{" "}
              </button>
            </div>
            <div className="salud-atencion__opciones-grupo">
              <button
                value="kinesiologia"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#62b5e5" }}
              >
                Kinesiología{" "}
              </button>
              <button
                value="obstetrica"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#c5299b" }}
              >
                Obstetricia{" "}
              </button>
              <button
                value="enfermeria"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#0097a9" }}
              >
                Enfermeria{" "}
              </button>
              <button
                value="medicina"
                onClick={handleEspecialidad}
                className="salud-atencion__opcion"
                style={{ background: "#8246af" }}
              >
                Medicina{" "}
              </button>
            </div>
          </div>
          {especialidad === "" && (
            <div className="salud-atencion__mensaje-especialidad">
              <p className="salud-atencion__mensaje-alerta">
                Selecciona Una especialidad
              </p>
              <img
                className="salud-atencion__logo-alerta"
                src="/salud/alert.png"
                alt="logo alerta"
              />
            </div>
          )}
        </div>
        {especialidad !== "" && (
          <div className="salud-atencion__especialidad">{especialidad}</div>
        )}

        <Recomendaciones />
      </div>
    </>
  );
};

export default atencion;
