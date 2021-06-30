import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";

const NavbarPage = ({ children }: any) => {
  const [modificador, setModificador] = useState(false);

  /* const NavBar = styled.div`
    width: ${modificador};
  `; */

  function openNav() {
    document.getElementsByTagName("main")[0].style.marginLeft = "250px";
    setModificador(true);
  }

  function closeNav() {
    document.getElementsByTagName("main")[0].style.marginLeft = "0px";
    setModificador(false);
  }
  return (
    <>
      <div
        className={"sidenav"}
        css={css`
          width: ${modificador ? "250px" : "0px"};
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
        css={css`
          margin-left: ${modificador ? "250px" : "0px"};
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
