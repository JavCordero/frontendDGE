import React from "react";
import TarjetaInstruccion from "../../components/salud/Recursos/TarjetaInstruccion";
import styled from "@emotion/styled";
import TitleLine from "../../components/others/TitleLine";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";

const visadoCertificadosMedicos = () => {
  const Button = styled.button`
    font-size: 1.7em;
    color: white;
    font-weight: bold;
    background-color: #04599e;
    outline: none;
    border: none;
    border-radius: 0.8em;
    padding: 0.8em 1.6em;
    box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
    display: block;
    &:hover {
      text-decoration: underline;
      opacity: 0.95;
    }
    &:active {
      transform: scale(0.99);
    }
  `;
  return (
    <>
      <MDBBreadcrumb className="mb-0">
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/salud">Salud</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          Visado de certificados medicos
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <div className="visadoCertificadosMedicos">
        <TitleLine>Visado de certificados medicos</TitleLine>
        <div className="visadoCertificadosMedicos__content">
          <TarjetaInstruccion
            titulo="Adjunta tu certificado"
            srcIcono="/salud/iconoArchivo.png"
          >
            NOTA: Tienes 5 días desde la emisión para poder presentarlo y debe
            contener letra legible, nombre del estudiante, tiempo de reposos,
            firma y timbre del médico.
          </TarjetaInstruccion>
          <TarjetaInstruccion srcIcono="/salud/iconoArchivoPDF.png">
            Llegará un PDF a tu correo institucional con el certificado aprobado
            por el área de salud, el cual deberás presentar en tu unidad
            académica.
          </TarjetaInstruccion>
          <a
            href="https://forms.gle/GCc9rvpsrCYj3pxe6"
            rel="noreferrer"
            target="_blank"
          >
            <Button>Ir al formulario</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default visadoCertificadosMedicos;
