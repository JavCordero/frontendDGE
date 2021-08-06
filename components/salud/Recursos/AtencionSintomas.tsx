import React from "react";
import imageProfile from "../../../public/profile.png";
import Image from "next/image";

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

/*
Este componente se utiliza para generar la interfaz de atenciones:

Para añadir sintomas o tarjetas en la seccion izquierda, debes incluir los sintomas en una etiqueta <p>sintoma 1</p> ej:
<p>Si sientes hambre</p>
<p>Si te duele la cabeza</p>

los parametros que recibe son:

- mensaje: el titulo que se mostrara en la interfaz para el lado izquierdo, por defecto "Si...:".
- mensajeContacto: el titulo que se mostrara en la interfaz para el lado derecho, por defecto "Solicita hora con nuestros profesionales de la salud:".
- nombreEncargado: el nombre del encargado (si aplica).
- cargoEncargado: el cargo del encargado (si aplica).
- srcEncargado: la imagen del encargado (si aplica).
- srcArea: imagen del area de atencion medica.
- noCard: si es true, se mostrara el componente sin contacto en el lado derecho, en caso de que el nombre del encargado no exista incluir, por defecto false.
*/

const AtencionSintomas = (props) => {
  return (
    <div className="atencion-sintomas">
      {/* Seccion izquierda */}
      <div>
        <h2 className="atencion-sintomas__sintomas-titulo">
          {props.mensaje ? props.mensaje : "Si... :"}
        </h2>

        <div className="atencion-sintomas__sintomas">
          <img
            className="atencion-sintomas__imagen"
            src={
              props.srcArea || props.srcArea !== ""
                ? props.srcArea
                : "/salud/areaNoImagen.png"
            }
            alt="imagen de area salud"
          />
          {props.children}
        </div>
      </div>
      {/* Seccion derecha */}
      <div className="atencion-sintomas__contacto">
        {props.noCard ? (
          <>
            <h2 className="atencion-sintomas__contacto-titulo atencion-sintomas__contacto-titulo--noCard">
              {props.mensajeContacto
                ? props.mensajeContacto
                : "Solicita hora con nuestros profesionales de la salud:"}
            </h2>
            <button className="atencion-sintomas__hora atencion-sintomas__hora--noCard">
              Solicitar hora
            </button>
            <p className="atencion-sintomas__contacto-subTitulo">
              El tiempo de respuesta está sujeto a la demanda. Consultas
              areasalud@ucn.cl
            </p>
          </>
        ) : (
          <>
            <h2 className="atencion-sintomas__contacto-titulo">
              Solicita hora con nuestros profesionales de la salud:
            </h2>
            <div className="atencion-sintomas__contacto-content">
              <MDBCard
                className=""
                style={{ width: "18rem", backgroundColor: "rgba(0,0,0,0)" }}
              >
                <Image
                  className="rounded-circle border border-5 border-primary"
                  src={
                    props.srcEncargado || props.srcEncargado !== ""
                      ? props.srcEncargado
                      : imageProfile
                  }
                  alt="Imagen de encargado de area"
                />
                <MDBCardBody className="text-center">
                  <p className="atencion-sintomas__nombre">
                    {props.nombreEncargado || props.nombreEncargado !== ""
                      ? props.nombreEncargado
                      : "nombre"}
                  </p>
                  <p className="atencion-sintomas__cargo">
                    {props.cargoEncargado || props.cargoEncargado !== ""
                      ? props.cargoEncargado
                      : "Cargo"}
                  </p>
                  <button className="atencion-sintomas__hora">
                    Tomar hora
                  </button>
                </MDBCardBody>
              </MDBCard>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AtencionSintomas;
