import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import TitleLine from "../others/TitleLine";

export const Categoria = () => {
  return (
    <MDBContainer fluid className="bg-light shadow-5 rounded text-dark pb-5 p-0 mt-2">
      <TitleLine>Categorias</TitleLine>
      <MDBContainer>
        <MDBBtn outline className="m-2">
          #Actividad
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Beneficios
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Taller
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Noticia
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Postulación
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Pregrado
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Arte
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Cultura
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Entretención
        </MDBBtn>
        <MDBBtn outline className="m-2">
          #Investigación
        </MDBBtn>
      </MDBContainer>
    </MDBContainer>
  );
};
