import React from "react";
import imageProfile from "../../../public/profile.png";
import Image from "next/image";

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

const FonoAudiologia = (props) => {
  return (
    <div className="atencion-sintomas">
      <div>
        <h2 className="atencion-sintomas__sintomas-titulo">
          Si tienes algunos de estos síntomas:
        </h2>
        <div className="atencion-sintomas__sintomas">
          <img
            className="atencion-sintomas__imagen"
            src={props.srcArea}
            alt=""
          />
          {props.children}
        </div>
      </div>
      <div className="atencion-sintomas__contacto">
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
              src={props.srcEncargado ? props.srcEncargado : imageProfile}
              alt="Imagen de encargado de area"
            />
            <MDBCardBody className="text-center">
              <p className="atencion-sintomas__nombre">
                {props.nombreEncargado ? props.nombreEncargado : "nombre"}
              </p>
              <p className="atencion-sintomas__cargo">{props.cargoEncargado ? props.cargoEncargado : "Cargo"}</p>
              <button className="atencion-sintomas__hora">Tomar hora</button>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};

export default FonoAudiologia;
