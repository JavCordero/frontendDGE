import React from "react";
import Slider from "react-slick";
import { MDBContainer } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

export const MisionVisionObjetivo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <div className="bg-slider-mision mb-5 mt-4">
      <Slider
        {...settings}
        style={{
          maxWidth: "85% !important",
          display: "block !important",
          margin: "0 auto !important",
        }}
      >
        <div className="text-center">
          <i className="fas fa-bullseye mt-3"></i>
          <h2 className="mb-4">Misión</h2>
          <p>
            Complementar la formación académica de los estudiantes,
            contribuyendo a mejorar su calidad de vida y al fortalecimiento de
            su desarrollo integral, utilizando como medio las actividades
            deportivo-recreativas.
          </p>
        </div>
        <div className="text-center">
          <i className="fas fa-eye mt-3"></i>
          <h2 className="mb-4">Visión</h2>
          <p>
            Que el Deporte y la Recreación de la Universidad Católica del Norte,
            sea reconocido con una mirada de vocación social, fundamental en la
            formación integral y el desarrollo de identidad de nuestros
            educandos, creando un vínculo sistemático con la comunidad
            antofagastina.
          </p>
        </div>
        <div className="text-center">
          <i className="fas fa-flag-checkered mt-3"></i>
          <h2 className="mb-4">Objetivo General</h2>
          <p>
            Favorecer y ampliar en forma permanente la cobertura de
            participación de la comunidad universitaria y antofagastina en
            actividades deportivas y recreativas, potenciar nuevos programas y
            calidad de ellos, dando especial énfasis a la formación integral de
            nuestros educandos El incremento de la población estudiantil ha
            conllevado a que se aumente porcentualmente su participación en
            actividades deportivas, recreativas, competición y de vida
            saludable, y ello en directa concordancia a lo implementado en el
            Plan de Desarrollo Corporativo de la Ucn.
          </p>
        </div>
      </Slider>
    </div>
    // <MDBContainer
    //   fluid
    //   style={{
    //     maxWidth: "100%",
    //   }}
    // >
    //   <div className="bg-slider-mision mb-5 mt-4 " >
    //     <Slider
    //       {...settings}
    //       style={{
    //         maxWidth: "100%",
    //       }}
    //     >
    //       <div className="p-5 text-center">
    //         <h2 className="mb-3">Misión</h2>
    //         <p className="mb-3 mx-5">
    //           Complementar la formación académica de los estudiantes,
    //           contribuyendo a mejorar su calidad de vida y al fortalecimiento de
    //           su desarrollo integral, utilizando como medio las actividades
    //           deportivo-recreativas.
    //         </p>
    //       </div>
    //       <div className="p-5 text-center">
    //         <FontAwesomeIcon icon={faEye} size="8x" />
    //         <h2 className="mb-3">Visión</h2>
    //         <p className="mb-3 mx-5">
    //           Que el Deporte y la Recreación de la Universidad Católica del
    //           Norte, sea reconocido con una mirada de vocación social,
    //           fundamental en la formación integral y el desarrollo de identidad
    //           de nuestros educandos, creando un vínculo sistemático con la
    //           comunidad antofagastina.
    //         </p>
    //       </div>
    //       <div className="p-5 text-center">
    //         <FontAwesomeIcon icon={faFlagCheckered} size="8x" />
    //         <h2 className="mb-3">Objetivo General</h2>
    //         <p className="mb-3 mx-5">
    //           Favorecer y ampliar en forma permanente la cobertura de
    //           participación de la comunidad universitaria y antofagastina en
    //           actividades deportivas y recreativas, potenciar nuevos programas y
    //           calidad de ellos, dando especial énfasis a la formación integral
    //           de nuestros educandos El incremento de la población estudiantil ha
    //           conllevado a que se aumente porcentualmente su participación en
    //           actividades deportivas, recreativas, competición y de vida
    //           saludable, y ello en directa concordancia a lo implementado en el
    //           Plan de Desarrollo Corporativo de la Ucn.
    //         </p>
    //       </div>
    //     </Slider>
    //   </div>
    // </MDBContainer>
  );
};
