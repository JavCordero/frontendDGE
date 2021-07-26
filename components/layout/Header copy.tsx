import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logoDGE from "../../public/Imagen-DGE.jpg";
import logoUCN from "../../public/Escudo-UCN-Full-Color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketballBall, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
} from "mdb-react-ui-kit";

import { faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar>
      <MDBContainer fluid>
        <a className="navbar-brand">
          <Image src={logoDGE} width="70%" height="70%" />
        </a>
        <span className="navbar-text d-flex flex-wrap mr-auto">
          <MDBNavbarLink href="#">Inicio</MDBNavbarLink>
          <MDBNavbarLink href="#">Mi Portal</MDBNavbarLink>
          <MDBNavbarLink href="#">Online UCN</MDBNavbarLink>
          <MDBNavbarLink href="#">Noticias UCN</MDBNavbarLink>
          <MDBNavbarLink href="#">Campus UCN</MDBNavbarLink>
        </span>

        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control"
            placeholder=""
            aria-label="Search"
          />
          <MDBBtn color="primary" size="sm" className="m-0">
            <FontAwesomeIcon icon={faSearch} size="1x"></FontAwesomeIcon>
          </MDBBtn>
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
