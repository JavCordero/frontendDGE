import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/">Home</Link>
        <a rel="noreferrer" target="_blank" href="https://ssb.ucn.cl/">
          Mi portal
        </a>
        <a rel="noreferrer" target="_blank" href="https://online.ucn.cl/">
          Online UCN
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.noticias.ucn.cl/">
          Noticias UCN
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://campusvirtual.ucn.cl/"
        >
          Campus UCN
        </a>
      </nav>
    </div>
  );
};

export default Header;
