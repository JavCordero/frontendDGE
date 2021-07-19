import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

export const Categoria = () => {
  return (
    <MDBContainer fluid className="bg-light shadow-5 text-dark pb-5">
      <h2 className="mt-5 mb-4">Categorias</h2>
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
