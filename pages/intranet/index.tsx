import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Loader, Placeholder } from "rsuite";
import { AuthContext } from "../../context/AuthContext";
import CheckLogin from "../../hooks/useCheckLogin";

const index = () => {
  const router = useRouter();
  const { checkLogin } = useContext(AuthContext);
  const [isLoged, setIsLoged] = useState(true);
  const [usuario, setUsuario] = useState("");
  useEffect(() => {
    async function verificar() {
      const verificacion = await CheckLogin();
      if (verificacion.rol) {
        checkLogin(verificacion.rol);
        setIsLoged(false);
        setUsuario(verificacion.name);
      } else {
        setIsLoged(true);
        router.push("/login");
      }
    }
    verificar();
  }, []);

  return (
    <>
      {isLoged ? (
        <>
          <Placeholder.Grid rows={5} columns={3} active />
          <Loader backdrop content="Cargando..." vertical />
        </>
      ) : (
        <>
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">
              Sistema de gestión de noticias y eventos UCN
            </h1>
            <h4 className="mb-3">Bienvenido {usuario}</h4>
          </div>
          <MDBRow>
            <MDBCol className="my-3" size="12" lg="4">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Administrar Noticias</MDBCardTitle>
                  <MDBCardText>
                    Permite crear, editar, eliminar y visualizar las noticias
                    del Portal DGE.
                  </MDBCardText>
                  <Link href="/intranet/noticias">
                    <MDBBtn>Ir</MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="my-3" size="12" lg="4">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Administrar Eventos</MDBCardTitle>
                  <MDBCardText>
                    Permite crear, editar, eliminar y visualizar los eventos del
                    Portal DGE.
                  </MDBCardText>
                  <MDBBtn href="#">Ir</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="my-3" size="12" lg="4">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Crear Anuncio</MDBCardTitle>
                  <MDBCardText>
                    Permite crear un anuncio unico de duración limitada en una
                    página en particular.
                  </MDBCardText>
                  <MDBBtn href="#">Ir</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </>
      )}
    </>
  );
};

export default index;
