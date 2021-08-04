import React, { Children } from "react";
import { Toggle, Sidenav, Nav, Icon, Dropdown } from "rsuite";
import { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Logout from "../../hooks/useLogout";
import { useRouter } from "next/router";

export const SidenavIntra = ({ children }: any) => {
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
          css={css`
            width: ${expanded ? "250px" : "55px"};
            transition-duration: 0.5s;
            transition-property: width;
          `}
          style={{ height: "100vh" }}
          expanded={expanded}
          defaultOpenKeys={["3", "4"]}
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Toggle onChange={handleToggle} checked={expanded} />
          <Sidenav.Body>
            <Nav>
              <Link passHref href="/intranet">
                <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                  Panel Principal
                </Nav.Item>
              </Link>
              <Link passHref href="/intranet/noticias">
                <Nav.Item eventKey="2" icon={<Icon icon="newspaper-o" />}>
                  Gestión de noticias
                </Nav.Item>
              </Link>
              <Link passHref href="/intranet/eventos">
                <Nav.Item eventKey="3" icon={<Icon icon="calendar-o" />}>
                  Gestión de eventos
                </Nav.Item>
              </Link>
              <Link passHref href="/intranet/eventos">
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
      <main style={{ marginLeft: "65px" }}>{children}</main>
    </>
  );
};
