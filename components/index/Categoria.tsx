import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import TitleLine from "../others/TitleLine";

export const Categoria = ({ tags }) => {
  return (
    <MDBContainer
      fluid
      className="bg-light shadow-5 rounded text-dark pb-5 p-0 mt-2"
    >
      <TitleLine>Categorias</TitleLine>
      <MDBContainer>
        <MDBRow className="justify-content-center align-item-center">
          {tags.map((tag, index) => (
            <MDBCol size="auto" key={index}>
              <MDBBtn className="my-1 m-0 p-2 rounded-6">#{tag.label}</MDBBtn>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};
