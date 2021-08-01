import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Loader, Placeholder } from "rsuite";
import { AuthContext } from "../../../../context/AuthContext";
import CheckLogin from "../../../../hooks/useCheckLogin";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { FormEditEvento } from "../../../../components/Intranet/FormEditEvento";

const Evento = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { checkLogin } = useContext(AuthContext);
  const [isLoged, setIsLoged] = useState(true);
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    async function verificar() {
      const verificacion = await CheckLogin();
      if (verificacion.rol) {
        checkLogin(verificacion.rol);
        setIdUser(verificacion.id);
        setIsLoged(false);
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
          <Placeholder.Grid rows={5} columns={6} active />
          <Loader backdrop content="Cargando..." vertical />
        </>
      ) : (
        <div>
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Editar Evento</h1>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href="/intranet">Intranet</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="/intranet/noticias">Eventos</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Editar</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <FormEditEvento idUser={idUser} eventoId={id} />
        </div>
      )}
    </>
  );
};

export default Evento;
