import React, { Children } from "react";
import { Toggle, Sidenav, Nav, Icon, Dropdown } from "rsuite";
import { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";

export const SidenavIntra = ({ children }: any) => {
  const [expanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState("1");

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
              <Link href="/intranet">
                <Nav.Item icon={<Icon icon="dashboard" />}>
                  Panel Principal
                </Nav.Item>
              </Link>
              <Link href="/intranet/noticias">
                <Nav.Item eventKey="2" icon={<Icon icon="newspaper-o" />}>
                  Gestión de noticias
                </Nav.Item>
              </Link>
              <Link href="/intranet/eventos">
                <Nav.Item eventKey="2" icon={<Icon icon="calendar-o" />}>
                  Gestión de eventos
                </Nav.Item>
              </Link>
              <Link href="/intranet/eventos">
                <Nav.Item eventKey="2" icon={<Icon icon="speaker" />}>
                  Crear Anuncio
                </Nav.Item>
              </Link>

              <Dropdown
                placement="rightStart"
                eventKey="4"
                title="Settings"
                icon={<Icon icon="gear-circle" />}
              >
                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                <Dropdown.Menu eventKey="4-5" title="Custom Action">
                  <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
      <main
        css={css`
          margin-left: ${expanded ? "320px" : "80px"} !important;
          transition-duration: 1s;
          transition-property: margin-left;
        `}
      >
        {children}
      </main>
    </>
  );
};
