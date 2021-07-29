import {
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Loader, Placeholder, Icon } from "rsuite";
import { AuthContext } from "../../context/AuthContext";
import CheckLogin from "../../hooks/useCheckLogin";
import Image from "next/image";
import { MDBBtn } from "mdb-react-ui-kit";
import LoadNoticias from "../../hooks/useLoadNoticias";
import Link from "next/link";
import Swal from "sweetalert2";
import deleteNoticia from "../../hooks/useDeleteNoticia";

const noticias = () => {
  const router = useRouter();
  const { checkLogin } = useContext(AuthContext);
  const [isLoged, setIsLoged] = useState(true);
  const [loadData, setLoadData] = useState(false);
  const [item, setItem] = useState([]);
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
      const item = await LoadNoticias();
      if (item.data) {
        setItem(item.data);
        setLoadData(true);
      }
    }

    verificar();
    LoadItem();
  }, [loadData]);

  const eliminarNoticia = async (noticia) => {
    Swal.fire({
      title: "Se eliminará la noticia " + noticia.id,
      text: "Esta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const eliminado = await deleteNoticia(noticia.id);
        Swal.fire("Noticia eliminada", "", "success");
        setLoadData(false);
        console.log(eliminado);
      }
    });
  };
  return (
    <>
      {isLoged ? (
        <>
          <Placeholder.Grid rows={5} columns={6} active />
          <Loader backdrop content="Cargando..." vertical />
        </>
      ) : (
        <>
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Gestión de Noticias</h1>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href="/intranet">Intranet</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Noticias</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <MDBBtn
            className="p-2 d-flex align-items-center justify-content-center ml-auto"
            color="success"
            onClick={() => router.push("/intranet/noticias/agregarnoticia")}
          >
            Nueva Noticia&nbsp; &nbsp;
            <Icon size="2x" icon="plus-square" />
          </MDBBtn>

          <MDBTable className="table-responsive-sm text-center" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Imagen</th>
                <th scope="col">Título</th>
                <th scope="col">Área</th>
                <th scope="col">Tags</th>
                <th scope="col">Acción</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {loadData ? (
                item.map((noticia) => (
                  <tr key={noticia.id}>
                    <th scope="row">{noticia.id}</th>
                    <td>
                      <Image
                        src={`http://127.0.0.1:8000${noticia.imagen}`}
                        width="150"
                        height="100"
                        objectFit="cover"
                      ></Image>
                    </td>
                    <td>{noticia.titulo}</td>
                    <td>{noticia.area.name}</td>
                    <td>
                      {noticia.tags.map((tag) => (
                        <h5 key={tag.id}>
                          <MDBBadge color="success" className="ms-2">
                            {tag.name}
                          </MDBBadge>
                        </h5>
                      ))}
                    </td>
                    <td>
                      <MDBBtn
                        onClick={() => eliminarNoticia(noticia)}
                        className="p-2"
                        color="danger"
                      >
                        <Icon size="2x" icon="trash" />
                      </MDBBtn>
                      <Link href={`/intranet/noticias/edit/${noticia.id}`}>
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

export default noticias;
