import React, { useContext, useEffect, useState } from "react";

import { Loader, Placeholder, Icon } from "rsuite";
import {
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import Link from "next/link";
import CheckLogin from "../../hooks/useCheckLogin";
import LoadEventos from "../../hooks/useLoadEventos";
import { host } from "../../public/js/host";
import Swal from "sweetalert2";
import deleteEvento from "../../hooks/useDeleteEvento";

const Eventos = () => {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(true);
  const [loadData, setLoadData] = useState(false);
  const [item, setItem] = useState([]);
  const { checkLogin } = useContext(AuthContext);
  useEffect(() => {
    async function verificar() {
      const verificacion = await CheckLogin();
      if (verificacion.rol) {
        checkLogin(verificacion.rol);
        setIsLoged(false);
      } else {
        setIsLoged(true);
        router.push("/login");
      }
    }
    async function LoadItem() {
      const item = await LoadEventos();
      if (item.data) {
        setItem(item.data);
        setLoadData(true);
      }
    }
    verificar();
    LoadItem();
  }, [loadData]);

  const eliminarEvento = async (evento) => {
    Swal.fire({
      title: "Se eliminará el evento " + evento.id,
      text: "Esta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const eliminado = await deleteEvento(evento.id);
        Swal.fire("Evento eliminado", "", "success");
        setLoadData(false);
        console.log(eliminado);
      }
    });
  };
  return (
    <>
      {isLoged ? (
        <>
          <Placeholder.Grid rows={5} columns={7} active />
          <Loader backdrop content="Cargando..." vertical />
        </>
      ) : (
        <>
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Gestión de Eventos</h1>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link href="/intranet">Intranet</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Eventos</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <MDBBtn
            className="p-2 d-flex align-items-center justify-content-center ml-auto"
            color="success"
            onClick={() => router.push("/intranet/eventos/agregarevento")}
          >
            Nuevo Evento&nbsp; &nbsp;
            <Icon size="2x" icon="plus-square" />
          </MDBBtn>

          <MDBTable className="table-responsive-sm text-center" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Título</th>
                <th scope="col">Área</th>
                <th scope="col">Tags</th>
                <th scope="col">F. Inicio</th>
                <th scope="col">F. Fin</th>
                <th scope="col">Acción</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {loadData ? (
                item.map((evento) => (
                  <tr key={evento.id}>
                    <th scope="row">{evento.id}</th>
                    <td>{evento.titulo}</td>
                    <td>{evento.area.name}</td>
                    <td>
                      {evento.tags.map((tag) => (
                        <h5 key={tag.id}>
                          <MDBBadge color="success" className="ms-2">
                            {tag.name}
                          </MDBBadge>
                        </h5>
                      ))}
                    </td>
                    <td>{`${new Date(evento.inicio).toLocaleDateString(
                      undefined,
                      {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: false,
                      }
                    )}`}</td>
                    <td>{`${new Date(evento.fin).toLocaleDateString(undefined, {
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: false,
                    })}`}</td>
                    <td>
                      <MDBBtn
                        onClick={() => eliminarEvento(evento)}
                        className="p-2"
                        color="danger"
                      >
                        <Icon size="2x" icon="trash" />
                      </MDBBtn>
                      <Link
                        href={`/intranet/eventos/edit/${evento.id}`}
                        passHref
                      >
                        <MDBBtn className="p-2" color="warning">
                          <Icon size="2x" icon="edit" />
                        </MDBBtn>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>
                    <Placeholder.Grid rows={10} columns={6} active />
                  </td>
                </tr>
              )}
            </MDBTableBody>
          </MDBTable>
        </>
      )}
    </>
  );
};

export default Eventos;
