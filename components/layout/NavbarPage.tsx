import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";

const NavbarPage = ({ children }: any) => {
  const [modificador, setModificador] = useState(false);

  function openNav() {
    setModificador(true);
  }

  function closeNav() {
    setModificador(false);
  }
  return (
    <>
      <div
        className={"sidenav"}
        css={css`
          width: ${modificador ? "20vw" : "0"};
          transition-duration: 0.5s;
          transition-property: width;
        `}
      >
        <a className="sidenav-closebtn item-navbar" onClick={closeNav}>
          &times;
        </a>
        <a className="item-navbar">About</a>
        <a className="item-navbar">Services</a>
        <a className="item-navbar">Clients</a>
        <a className="item-navbar">Contact</a>
      </div>

      <div id="button-open-nav" className="button-expand">
        <span onClick={openNav}>&#9776;</span>
      </div>
      <main
        onClick={closeNav}
        css={css`
          margin-left: ${modificador ? "22vw" : "6vw"};
          transition-duration: 1s;
          transition-property: margin-left;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default NavbarPage;
