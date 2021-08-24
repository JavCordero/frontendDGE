import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import CheckLogin from "../../../hooks/useCheckLogin";
import { Placeholder, Loader, Icon } from "rsuite";
import {
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import Link from "next/link";
import LoadAnuncios from "../../../hooks/useLoadAnuncios";
import EditActiveAnuncio from "../../../hooks/useEditActiveAnuncio";
import Swal from "sweetalert2";
import deleteAnuncio from "../../../hooks/useDeleteAnuncio";

const Index = () => {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(true);
  const [loadData, setLoadData] = useState(false);

  const [anuncioIndex, setAnuncioIndex] = useState([]);
  const [indexActive, setIndexActive] = useState(false);

  const [anuncioBeneficios, setAnuncioBeneficios] = useState([]);
  const [beneficiosActive, setBeneficiosActive] = useState(false);

  const [anuncioSalud, setAnuncioSalud] = useState([]);
  const [saludActive, setSaludActive] = useState(false);

  const [anuncioDeportes, setAnuncioDeportes] = useState([]);
  const [deportesActive, setDeportesActive] = useState(false);

  const [anuncioArte, setAnuncioArte] = useState([]);
  const [ArteActive, setArteActive] = useState(false);

  const [anuncioJardin, setAnuncioJardin] = useState([]);
  const [JardinActive, setJardinActive] = useState(false);

  const [anuncioInclusion, setAnuncioInclusion] = useState([]);
  const [InclusionActive, setInlcusionActive] = useState(false);

  const activarAnuncio = async (id, activo, area) => {
    anuncioIndex.length = 0;
    anuncioBeneficios.length = 0;
    anuncioSalud.length = 0;
    anuncioDeportes.length = 0;
    anuncioArte.length = 0;
    anuncioJardin.length = 0;
    anuncioInclusion.length = 0;
    if (area === "index") {
      setIndexActive(false);
    }
    if (area === "beneficios") {
      setBeneficiosActive(false);
    }
    if (area === "salud") {
      setSaludActive(false);
    }
    if (area === "deportes") {
      setDeportesActive(false);
    }
    if (area === "arte") {
      setArteActive(false);
    }
    if (area === "jardin") {
      setJardinActive(false);
    }
    if (area === "inclusion") {
      setInlcusionActive(false);
    }
    const edit = await EditActiveAnuncio(id, activo);
    setLoadData(false);
  };

  const eliminarAnuncio = async (anuncio) => {
    anuncioIndex.length = 0;
    anuncioBeneficios.length = 0;
    anuncioSalud.length = 0;
    anuncioDeportes.length = 0;
    anuncioArte.length = 0;
    anuncioJardin.length = 0;
    anuncioInclusion.length = 0;
    Swal.fire({
      title: "Se eliminará el anuncio " + anuncio.id,
      text: "Esta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const eliminado = await deleteAnuncio(anuncio.id);
        Swal.fire("Noticia eliminada", "", "success");
        setLoadData(false);
      }
    });
  };

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

    verificar();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    anuncioIndex.length = 0;
    anuncioBeneficios.length = 0;
    anuncioSalud.length = 0;
    anuncioDeportes.length = 0;
    anuncioArte.length = 0;
    anuncioJardin.length = 0;
    anuncioInclusion.length = 0;
    async function LoadItem() {
      const item = await LoadAnuncios();
      console.log(item);
      if (Array.isArray(item)) {
        item.forEach((anuncio) => {
          switch (anuncio.area_id) {
            case null:
              setAnuncioIndex((anuncioIndex) => [...anuncioIndex, anuncio]);
              if (anuncio.activo === 1) {
                setIndexActive(true);
              }
              break;
            case 1:
              setAnuncioSalud((anuncioSalud) => [...anuncioSalud, anuncio]);
              if (anuncio.activo === 1) {
                setSaludActive(true);
              }
              break;
            case 2:
              anuncioDeportes.push(anuncio);
              if (anuncio.activo === 1) {
                setDeportesActive(true);
              }
              break;
            case 3:
              anuncioBeneficios.push(anuncio);
              if (anuncio.activo === 1) {
                setBeneficiosActive(true);
              }
              break;
            case 4:
              anuncioArte.push(anuncio);
              if (anuncio.activo === 1) {
                setArteActive(true);
              }
              break;
            case 5:
              anuncioJardin.push(anuncio);
              if (anuncio.activo === 1) {
                setJardinActive(true);
              }
              break;
            case 6:
              anuncioInclusion.push(anuncio);
              if (anuncio.activo === 1) {
                setInlcusionActive(true);
              }
              break;
            default:
              break;
          }
        });
        setLoadData(true);
      }
    }
    LoadItem();
  }, [loadData]);
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
            <h1 className="mb-3">Gestión de Anuncios</h1>
            <h4>Solo se permite un anuncio activo por área</h4>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link href="/intranet">Intranet</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Anuncios</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <MDBBtn
            className="p-2 d-flex align-items-center justify-content-center ml-auto"
            color="success"
            onClick={() => router.push("/intranet/anuncios/agregaranuncio")}
          >
            Nuevo Anuncio&nbsp; &nbsp;
            <Icon size="2x" icon="plus-square" />
          </MDBBtn>

          <MDBRow>
            <MDBCol size="12" md="6">
              <h5>Anuncios de la pagina principal</h5>
              <MDBTable className="table-responsive-sm text-center" hover>
                <MDBTableHead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Activo?</th>
                    <th scope="col">Acción</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {loadData ? (
                    anuncioIndex.map((evento) => (
                      <tr key={evento.id}>
                        <th scope="row">{evento.id}</th>
                        <td>{evento.descripcion}</td>
                        <td>{evento.activo === 0 ? "No activo" : "Activo"}</td>
                        <td>
                          <MDBBtn
                            onClick={() => eliminarAnuncio(evento)}
                            className="p-2"
                            color="danger"
                          >
                            <Icon size="2x" icon="trash" />
                          </MDBBtn>
                          <Link
                            href={`/intranet/anuncios/edit/${evento.id}`}
                            passHref
                          >
                            <MDBBtn className="p-2" color="warning">
                              <Icon size="2x" icon="edit" />
                            </MDBBtn>
                          </Link>
                          {evento.activo === 0 ? (
                            !indexActive ? (
                              <MDBBtn
                                onClick={() =>
                                  activarAnuncio(evento.id, "T", "index")
                                }
                                className="p-2"
                                color="success"
                              >
                                <Icon size="2x" icon="eye" />
                              </MDBBtn>
                            ) : null
                          ) : (
                            <MDBBtn
                              onClick={() =>
                                activarAnuncio(evento.id, "F", "index")
                              }
                              className="p-2"
                              color="warning"
                            >
                              <Icon size="2x" icon="eye-slash" />
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <Placeholder.Grid rows={3} columns={4} active />
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCol size="12" md="6">
              <h5>Anuncios de la sección Beneficios</h5>
              <MDBTable className="table-responsive-sm text-center" hover>
                <MDBTableHead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Activo?</th>
                    <th scope="col">Acción</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {loadData ? (
                    anuncioBeneficios.map((evento) => (
                      <tr key={evento.id}>
                        <th scope="row">{evento.id}</th>
                        <td>{evento.descripcion}</td>
                        <td>{evento.activo === 0 ? "No activo" : "Activo"}</td>
                        <td>
                          <MDBBtn
                            onClick={() => eliminarAnuncio(evento)}
                            className="p-2"
                            color="danger"
                          >
                            <Icon size="2x" icon="trash" />
                          </MDBBtn>
                          <Link
                            href={`/intranet/anuncios/edit/${evento.id}`}
                            passHref
                          >
                            <MDBBtn className="p-2" color="warning">
                              <Icon size="2x" icon="edit" />
                            </MDBBtn>
                          </Link>
                          {evento.activo === 0 ? (
                            !beneficiosActive ? (
                              <MDBBtn
                                onClick={() =>
                                  activarAnuncio(evento.id, "T", "beneficios")
                                }
                                className="p-2"
                                color="success"
                              >
                                <Icon size="2x" icon="eye" />
                              </MDBBtn>
                            ) : null
                          ) : (
                            <MDBBtn
                              onClick={() =>
                                activarAnuncio(evento.id, "F", "beneficios")
                              }
                              className="p-2"
                              color="warning"
                            >
                              <Icon size="2x" icon="eye-slash" />
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <Placeholder.Grid rows={3} columns={4} active />
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12" md="6">
              <h5>Anuncios de Salud</h5>
              <MDBTable className="table-responsive-sm text-center" hover>
                <MDBTableHead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Activo?</th>
                    <th scope="col">Acción</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {loadData ? (
                    anuncioSalud.map((evento) => (
                      <tr key={evento.id}>
                        <th scope="row">{evento.id}</th>
                        <td>{evento.descripcion}</td>
                        <td>{evento.activo === 0 ? "No activo" : "Activo"}</td>
                        <td>
                          <MDBBtn
                            onClick={() => eliminarAnuncio(evento)}
                            className="p-2"
                            color="danger"
                          >
                            <Icon size="2x" icon="trash" />
                          </MDBBtn>
                          <Link
                            href={`/intranet/anuncios/edit/${evento.id}`}
                            passHref
                          >
                            <MDBBtn className="p-2" color="warning">
                              <Icon size="2x" icon="edit" />
                            </MDBBtn>
                          </Link>
                          {evento.activo === 0 ? (
                            !saludActive ? (
                              <MDBBtn
                                onClick={() =>
                                  activarAnuncio(evento.id, "T", "salud")
                                }
                                className="p-2"
                                color="success"
                              >
                                <Icon size="2x" icon="eye" />
                              </MDBBtn>
                            ) : null
                          ) : (
                            <MDBBtn
                              onClick={() =>
                                activarAnuncio(evento.id, "F", "salud")
                              }
                              className="p-2"
                              color="warning"
                            >
                              <Icon size="2x" icon="eye-slash" />
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <Placeholder.Grid rows={3} columns={4} active />
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCol size="12" md="6">
              <h5>Anuncios de Deportes</h5>
              <MDBTable className="table-responsive-sm text-center" hover>
                <MDBTableHead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Activo?</th>
                    <th scope="col">Acción</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {loadData ? (
                    anuncioDeportes.map((evento) => (
                      <tr key={evento.id}>
                        <th scope="row">{evento.id}</th>
                        <td>{evento.descripcion}</td>
                        <td>{evento.activo === 0 ? "No activo" : "Activo"}</td>
                        <td>
                          <MDBBtn
                            onClick={() => eliminarAnuncio(evento)}
                            className="p-2"
                            color="danger"
                          >
                            <Icon size="2x" icon="trash" />
                          </MDBBtn>
                          <Link
                            href={`/intranet/anuncios/edit/${evento.id}`}
                            passHref
                          >
                            <MDBBtn className="p-2" color="warning">
                              <Icon size="2x" icon="edit" />
                            </MDBBtn>
                          </Link>
                          {evento.activo === 0 ? (
                            !deportesActive ? (
                              <MDBBtn
                                onClick={() =>
                                  activarAnuncio(evento.id, "T", "deportes")
                                }
                                className="p-2"
                                color="success"
                              >
                                <Icon size="2x" icon="eye" />
                              </MDBBtn>
                            ) : null
                          ) : (
                            <MDBBtn
                              onClick={() =>
                                activarAnuncio(evento.id, "F", "deportes")
                              }
                              className="p-2"
                              color="warning"
                            >
                              <Icon size="2x" icon="eye-slash" />
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <Placeholder.Grid rows={3} columns={4} active />
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12" md="6">
              <h5>Anuncios de Arte y cultura</h5>
              <MDBTable className="table-responsive-sm text-center" hover>
                <MDBTableHead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Activo?</th>
                    <th scope="col">Acción</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {loadData ? (
                    anuncioArte.map((evento) => (
                      <tr key={evento.id}>
                        <th scope="row">{evento.id}</th>
                        <td>{evento.descripcion}</td>
                        <td>{evento.activo === 0 ? "No activo" : "Activo"}</td>
                        <td>
                          <MDBBtn
                            onClick={() => eliminarAnuncio(evento)}
                            className="p-2"
                            color="danger"
                          >
                            <Icon size="2x" icon="trash" />
                          </MDBBtn>
                          <Link
                            href={`/intranet/anuncios/edit/${evento.id}`}
                            passHref
                          >
                            <MDBBtn className="p-2" color="warning">
                              <Icon size="2x" icon="edit" />
                            </MDBBtn>
                          </Link>
                          {evento.activo === 0 ? (
                            !ArteActive ? (
                              <MDBBtn
                                onClick={() =>
                                  activarAnuncio(evento.id, "T", "arte")
                                }
                                className="p-2"
                                color="success"
                              >
                                <Icon size="2x" icon="eye" />
                              </MDBBtn>
                            ) : null
                          ) : (
                            <MDBBtn
                              onClick={() =>
                                activarAnuncio(evento.id, "F", "arte")
                              }
                              className="p-2"
                              color="warning"
                            >
                              <Icon size="2x" icon="eye-slash" />
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <Placeholder.Grid rows={3} columns={4} active />
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCol size="12" md="6">
              <h5>Anuncios de Jardín Infantil</h5>
              <MDBTable className="table-responsive-sm text-center" hover>
                <MDBTableHead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Activo?</th>
                    <th scope="col">Acción</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {loadData ? (
                    anuncioJardin.map((evento) => (
                      <tr key={evento.id}>
                        <th scope="row">{evento.id}</th>
                        <td>{evento.descripcion}</td>
                        <td>{evento.activo === 0 ? "No activo" : "Activo"}</td>
                        <td>
                          <MDBBtn
                            onClick={() => eliminarAnuncio(evento)}
                            className="p-2"
                            color="danger"
                          >
                            <Icon size="2x" icon="trash" />
                          </MDBBtn>
                          <Link
                            href={`/intranet/anuncios/edit/${evento.id}`}
                            passHref
                          >
                            <MDBBtn className="p-2" color="warning">
                              <Icon size="2x" icon="edit" />
                            </MDBBtn>
                          </Link>
                          {evento.activo === 0 ? (
                            !JardinActive ? (
                              <MDBBtn
                                onClick={() =>
                                  activarAnuncio(evento.id, "T", "jardin")
                                }
                                className="p-2"
                                color="success"
                              >
                                <Icon size="2x" icon="eye" />
                              </MDBBtn>
                            ) : null
                          ) : (
                            <MDBBtn
                              onClick={() =>
                                activarAnuncio(evento.id, "F", "jardin")
                              }
                              className="p-2"
                              color="warning"
                            >
                              <Icon size="2x" icon="eye-slash" />
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <Placeholder.Grid rows={3} columns={4} active />
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12" md="6">
              <h5>Anuncios de Inclusión</h5>
              <MDBTable className="table-responsive-sm text-center" hover>
                <MDBTableHead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Activo?</th>
                    <th scope="col">Acción</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {loadData ? (
                    anuncioInclusion.map((evento) => (
                      <tr key={evento.id}>
                        <th scope="row">{evento.id}</th>
                        <td>{evento.descripcion}</td>
                        <td>{evento.activo === 0 ? "No activo" : "Activo"}</td>
                        <td>
                          <MDBBtn
                            onClick={() => eliminarAnuncio(evento)}
                            className="p-2"
                            color="danger"
                          >
                            <Icon size="2x" icon="trash" />
                          </MDBBtn>
                          <Link
                            href={`/intranet/anuncios/edit/${evento.id}`}
                            passHref
                          >
                            <MDBBtn className="p-2" color="warning">
                              <Icon size="2x" icon="edit" />
                            </MDBBtn>
                          </Link>
                          {evento.activo === 0 ? (
                            !InclusionActive ? (
                              <MDBBtn
                                onClick={() =>
                                  activarAnuncio(evento.id, "T", "inclusion")
                                }
                                className="p-2"
                                color="success"
                              >
                                <Icon size="2x" icon="eye" />
                              </MDBBtn>
                            ) : null
                          ) : (
                            <MDBBtn
                              onClick={() =>
                                activarAnuncio(evento.id, "F", "inclusion")
                              }
                              className="p-2"
                              color="warning"
                            >
                              <Icon size="2x" icon="eye-slash" />
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <Placeholder.Grid rows={3} columns={4} active />
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </>
      )}
    </>
  );
};

export default Index;
