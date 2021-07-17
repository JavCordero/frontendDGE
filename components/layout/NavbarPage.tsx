import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faHome,
  faBars,
  faStarOfLife,
  faGraduationCap,
  faBasketballBall,
  faUniversity,
  faBabyCarriage,
  faUniversalAccess,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { Button, Collapse } from "react-bootstrap";
import Header from "./Header";

const NavbarPage = ({ children }: any) => {
  const [modificador, setModificador] = useState(false);
  const [color, setColor] = useState("");
  const [collapseBeneficios, setCollapseBeneficios] = useState(false);
  const [collapseSalud, setCollapseSalud] = useState(false);
  const [collapseDeportes, setCollapseDeportes] = useState(false);
  const [collapseArte, setCollapseArte] = useState(false);
  const [collapseJardin, setCollapseJardin] = useState(false);
  const [collapseIncluye, setCollapseIncluye] = useState(false);

  const router = useRouter();

  function openNav() {
    setModificador(true);
  }

  function closeNav() {
    setModificador(false);
  }

  useEffect(() => {
    setColor(router.pathname);
    console.log(color);
  }, [router.pathname]);

  return (
    <>
      <div
        className={"sidenav"}
        css={css`
          width: ${modificador ? "20%" : "0%"};
          transition-duration: 0.5s;
          transition-property: width;
        `}
      >
        <FontAwesomeIcon
          className="item-navbar color-icon mt-2 navbar-button-close"
          onClick={closeNav}
          icon={faTimes}
          size="3x"
        ></FontAwesomeIcon>

        <div className="mx-3 mt-5">
          <FontAwesomeIcon
            className={(color === "/" ? "icon-active" : "color-icon") + " mt-5"}
            icon={faHome}
            size="1x"
          ></FontAwesomeIcon>
          <span className={color === "/" ? "icon-active" : "color-icon"}>
            {" "}
            Inicio
          </span>
        </div>

        <hr className="mt-1 mb-1 hr-success" />

        <div
          onClick={() => setCollapseBeneficios(!collapseBeneficios)}
          className="mx-3"
        >
          <FontAwesomeIcon
            className={color === "/beneficios" ? "icon-active" : "color-icon"}
            icon={faGraduationCap}
            size="1x"
          ></FontAwesomeIcon>
          <span
            className={color === "/beneficios" ? "icon-active" : "color-icon"}
          >
            {" "}
            Beneficios
          </span>
          <FontAwesomeIcon
            className={
              (color === "/beneficios" ? "icon-active" : "color-icon") +
              " navbar-icon-collapse mt-1"
            }
            icon={faChevronDown}
            size="1x"
          ></FontAwesomeIcon>
          <Collapse in={collapseBeneficios}>
            <div className="mx-3">
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  Beneficios Internos
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Beneficios Externos
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Preguntas Frecuentes
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Renovación de Beneficios
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
        <hr className="mt-1 mb-1 hr-success" />
        <div className="mx-3">
          <FontAwesomeIcon
            className={color === "/salud" ? "icon-active" : "color-icon"}
            icon={faStarOfLife}
            size="1x"
          ></FontAwesomeIcon>
          <span
            onClick={() => setCollapseSalud(!collapseSalud)}
            className={color === "/salud" ? "icon-active" : "color-icon"}
          >
            {" "}
            Salud
          </span>
          <FontAwesomeIcon
            className={
              (color === "/salud" ? "icon-active" : "color-icon") +
              " navbar-icon-collapse mt-1"
            }
            onClick={() => setCollapseSalud(!collapseSalud)}
            icon={faChevronDown}
            size="1x"
          ></FontAwesomeIcon>
          <Collapse in={collapseSalud}>
            <div className="mx-3">
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  Solicitud hora medica
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Visado certificados
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Contacto
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Preguntas frecuentes
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Agenda PRO
                </li>
              </ul>
            </div>
          </Collapse>
        </div>

        <hr className="mt-1 mb-1 hr-success" />

        <div className="mx-3">
          <FontAwesomeIcon
            className={color === "/deportes" ? "icon-active" : "color-icon"}
            icon={faBasketballBall}
            size="1x"
          ></FontAwesomeIcon>
          <span
            onClick={() => setCollapseDeportes(!collapseDeportes)}
            className={color === "/deportes" ? "icon-active" : "color-icon"}
          >
            {" "}
            Deportes
          </span>
          <FontAwesomeIcon
            className={
              (color === "/deportes" ? "icon-active" : "color-icon") +
              " navbar-icon-collapse mt-1"
            }
            onClick={() => setCollapseDeportes(!collapseDeportes)}
            icon={faChevronDown}
            size="1x"
          ></FontAwesomeIcon>
          <Collapse in={collapseDeportes}>
            <div className="mx-3">
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  Deporte selectivo
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Deporte interno
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Actividades complementarias
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Infraestructura Deportiva
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Preguntas frecuentes
                </li>
              </ul>
            </div>
          </Collapse>
        </div>

        <hr className="mt-1 mb-1 hr-success" />

        <div className="mx-3">
          <FontAwesomeIcon
            className={color === "/arte" ? "icon-active" : "color-icon"}
            icon={faUniversity}
            size="1x"
          ></FontAwesomeIcon>
          <span
            onClick={() => setCollapseArte(!collapseArte)}
            className={color === "/arte" ? "icon-active" : "color-icon"}
          >
            {" "}
            Arte y Cultura
          </span>
          <FontAwesomeIcon
            className={
              (color === "/arte" ? "icon-active" : "color-icon") +
              " navbar-icon-collapse mt-1"
            }
            onClick={() => setCollapseArte(!collapseArte)}
            icon={faChevronDown}
            size="1x"
          ></FontAwesomeIcon>
          <Collapse in={collapseArte}>
            <div className="mx-3">
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  Link 1
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Link 2
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Link 3
                </li>
              </ul>
            </div>
          </Collapse>
        </div>

        <hr className="mt-1 mb-1 hr-success" />

        <div className="mx-3">
          <FontAwesomeIcon
            className={color === "/jardin" ? "icon-active" : "color-icon"}
            icon={faBabyCarriage}
            size="1x"
          ></FontAwesomeIcon>
          <span
            onClick={() => setCollapseJardin(!collapseJardin)}
            className={color === "/jardin" ? "icon-active" : "color-icon"}
          >
            {" "}
            Jardín infantil Taqinki
          </span>
          <FontAwesomeIcon
            className={
              (color === "/jardin" ? "icon-active" : "color-icon") +
              " navbar-icon-collapse mt-1"
            }
            onClick={() => setCollapseJardin(!collapseJardin)}
            icon={faChevronDown}
            size="1x"
          ></FontAwesomeIcon>
          <Collapse in={collapseJardin}>
            <div className="mx-3">
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  Link 1
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Link 2
                </li>
                <li className="list-group-item  bg-transparent border-0">
                  Link 3
                </li>
              </ul>
            </div>
          </Collapse>
        </div>

        <hr className="mt-1 mb-1 hr-success" />
      </div>

      <div
        css={css`
          width: ${modificador ? "0%" : "5%"};
          transition-duration: 0.5s;
          transition-property: width;
        `}
        id="button-open-nav"
        className="button-expand"
      >
        <FontAwesomeIcon
          className="d-block color-icon mt-3"
          onClick={openNav}
          icon={faBars}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={
            "mb-3 mt-5 d-block " +
            (color === "/" ? "icon-active" : "color-icon")
          }
          icon={faHome}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={
            "mb-3 d-block " +
            (color === "/beneficios" ? "icon-active" : "color-icon")
          }
          icon={faGraduationCap}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={
            "mb-3 d-block " +
            (color === "/salud" ? "icon-active" : "color-icon")
          }
          icon={faStarOfLife}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={
            "mb-3 d-block " +
            (color === "/deportes" ? "icon-active" : "color-icon")
          }
          icon={faBasketballBall}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={
            "mb-3 d-block " + (color === "/arte" ? "icon-active" : "color-icon")
          }
          icon={faUniversity}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={
            "mb-3 d-block " +
            (color === "/jardin" ? "icon-active" : "color-icon")
          }
          icon={faBabyCarriage}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={
            "mb-3 d-block " +
            (color === "/acceso" ? "icon-active" : "color-icon")
          }
          icon={faUniversalAccess}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className="mt-5 d-block color-icon"
          icon={faFacebook}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className="mt-2 d-block color-icon"
          icon={faInstagram}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className="mt-2 d-block color-icon"
          icon={faYoutube}
        ></FontAwesomeIcon>
      </div>

      <main
        onClick={closeNav}
        css={css`
          margin-left: ${modificador ? "22%" : "6%"};
          transition-duration: 1s;
          transition-property: margin-left;
        `}
      >
        <Header></Header>
        {children}
      </main>
    </>
  );
};

export default NavbarPage;
