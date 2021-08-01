import React, { Children } from "react";
import { Toggle, Sidenav, Nav, Icon, Dropdown } from "rsuite";
import { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Logout from "../../hooks/useLogout";
import { useRouter } from "next/router";
import Header from "./Header copy";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHome,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";

export const NavbarPublic = ({ children }: any) => {
  const [expanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState("1");
  const router = useRouter();

  async function salir() {
    await Logout();
    localStorage.clear();
    router.push("/login");
  }

  function handleToggle() {
    setExpanded(!expanded);
  }

  function handleSelect(e) {
    setActiveKey(e);
  }
  return (
    <>
      <div className={"sidenav__intranet"}>
        <Sidenav
          className=" sidenav__color"
          css={css`
            width: ${expanded ? "250px" : "55px"};
            transition-duration: 0.5s;
            transition-property: width;
          `}
          style={{ height: "100vh" }}
          expanded={expanded}
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Toggle
            className={`${
              expanded ? "navbar__full " : "navbar__mini"
            } navbar__open_transition`}
            style={{ marginTop: "10px", marginBottom: "10px" }}
            onChange={handleToggle}
            checked={expanded}
          />
          <Sidenav.Body>
            <Nav>
              <Link href="/">
                <Nav.Item
                  className="sidenav__color"
                  icon={
                    <FontAwesomeIcon
                      className="rs-icon"
                      icon={faHome}
                      size="1x"
                    />
                  }
                  eventKey="1"
                >
                  Inicio
                </Nav.Item>
              </Link>

              <hr className="hr-success my-0" />
              <Dropdown
                eventKey="2"
                title="Beneficios"
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faGraduationCap}
                    size="1x"
                  />
                }
              >
                <Link href="/beneficios">
                  <Dropdown.Item eventKey="2-1">Noticias</Dropdown.Item>
                </Link>

                <Dropdown.Item eventKey="2-2">
                  Beneficios Internos
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-3">
                  Beneficios Externos
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-4">
                  Preguntas Frecuentes
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="3"
                title="Salud"
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faStarOfLife}
                    size="1x"
                  />
                }
              >
                <Link href="/salud">
                  <Dropdown.Item eventKey="3-1">Noticias</Dropdown.Item>
                </Link>
                <Link href="/salud/atencion">
                  <Dropdown.Item eventKey="3-2">Solicitud Hora</Dropdown.Item>
                </Link>
                <Dropdown.Item eventKey="3-3">
                  Beneficios Externos
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-4">
                  Preguntas Frecuentes
                </Dropdown.Item>
              </Dropdown>
              <Link href="/intranet/eventos">
                <Nav.Item eventKey="4" icon={<Icon icon="speaker" />}>
                  Crear Anuncio
                </Nav.Item>
              </Link>
              <div onClick={() => salir()}>
                <Nav.Item eventKey="5" icon={<Icon icon="sign-out" />}>
                  Cerrar Sesión
                </Nav.Item>
              </div>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

      <main style={{ marginLeft: "65px" }} onClick={() => setExpanded(false)}>
        <Header></Header>
        {children}
        <Footer />
      </main>
    </>
  );
};
