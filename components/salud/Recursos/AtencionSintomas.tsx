import React from "react";
import imageProfile from "../../../public/profile.png";
import Image from "next/image";

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

const FonoAudiologia = (props) => {
  return (
    <div className="atencion-sintomas">
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
            alt=""
          />
          {props.children}
        </div>
      </div>
      <div className="atencion-sintomas__contacto">
        {props.noCard ? (
          <>
            <h2 className="atencion-sintomas__contacto-titulo--noCard">
              Solicita hora con nuestros profesionales de la salud:
            </h2>
            <button className="atencion-sintomas__hora--noCard">
              Tomar hora
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
                style={{ width: "20rem", backgroundColor: "rgba(0,0,0,0)" }}
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

export default FonoAudiologia;
