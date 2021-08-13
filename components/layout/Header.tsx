import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logos">
        <Image
          src={"/images/Escudo-UCN-Full-Color.png" as any}
          width="100"
          height="100"
          objectFit="cover"
          alt="Logo UCN"
        />
        <Image
          src={"/images/Imagen-DGE.jpg" as any}
          width="100"
          height="100"
          objectFit="cover"
          alt="Logo DGE"
        />
      </div>
      <nav className="header__enlaces">
        <a href="#">Home</a>
        <a href="#">Mi portal</a>
        <a href="#">Online UCN</a>
        <a href="#">Noticias UCN</a>
        <a href="#">Campus UCN</a>
      </nav>
      <div className="header__busqueda">
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
      </div>
    </div>
  );
};

export default Header;
