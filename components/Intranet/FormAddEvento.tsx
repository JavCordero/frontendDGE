import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  ControlLabel,
  Steps,
} from "rsuite";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import LoadAreas from "../../hooks/useLoadArea";
import CreatableSelect from "react-select/creatable";
import LoadTags from "../../hooks/useLoadTags";
import SunEditorCore from "suneditor/src/lib/core";

import dynamic from "next/dynamic";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

import Swal from "sweetalert2";
import router from "next/router";
import { toast, ToastContainer } from "react-toastify";
import PostEvento from "../../hooks/usePostEvento";
import getImagesByUser from "../../hooks/useGetImagesbyUser";
import { host } from "../../public/js/host";
import LoadImage from "../../hooks/useLoadImage";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const FormAddEvento = ({ idUser }) => {
  const [step, setStep] = useState(0);
  const [loadArea, setLoadArea] = useState(false);
  const [area, setArea] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadTags, setLoadTags] = useState(false);
  const [data, setData] = useState(
    '<div><span style="font-family: Arial; font-size: 14px;">En esta sección puede agregar cualquier información relevante para el evento.</span></div><div><span style="font-family: Arial; font-size: 14px;"><br></span></div><div><span style="font-family: Arial; font-size: 14px; background-color: rgb(255, 0, 0); color: rgb(241, 241, 241);">Para insertar imágenes en esta sección deberá subir la imagen a la galería de imágenes y luego agregar la imagen a esta sección.</span></div><div><span style="font-family: Arial; font-size: 14px;"><br></span></div><div><span style="font-family: Arial; font-size: 14px;"><u><strong>Algunas recomendaciones de información relevante para un evento:</strong></u></span></div><div><span style="font-size: 14px;"><br></span></div><table><tbody><tr><td><div><span style="font-family: Arial; font-size: 14px;">Lugar:<br></span></div></td><td><span style="font-family: Arial; font-size: 14px;">Ej.: Entrada sur UCN Antofagasta.</span></td></tr><tr><td><div><span style="font-family: Arial; font-size: 14px;">Encargado:</span></div></td><td><div><span style="font-family: Arial; font-size: 14px;">Ej.: Vianca Vega (Directora General estudiantil)</span></div></td></tr><tr><td><div><span style="font-family: Arial; font-size: 14px;">Requisitos:</span></div></td><td><div><span style="font-family: Arial; font-size: 14px;">Ej.: Portar pase de movilidad</span></div></td></tr><tr><td><div><span style="font-family: Arial; font-size: 14px;">Contacto:</span></div></td><td><span style="font-size: 14px;"><span style="font-family: Arial;">Ej.:&nbsp;</span><a href="mailto:secretaria@ucn.cl" alt="Secretaria DGE"><span style="font-family: Arial;">Secretaria DGE</span></a></span></td></tr></tbody></table><p><span style="font-size: 14px;"><br></span></p><p><span style="font-size: 14px;">​</span></p>'
  );
  const [loadImagenes, setLoadImagenes] = useState([]);

  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const [tagSelect, setTagSelect] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");

  const [descipcion, setDescripcion] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [imagen, setImagen] = useState<File | undefined>(undefined);

  const [imagen2, setImagen2] = useState<File | undefined>(undefined);
  const imagenInput = useRef();
  const imagenInput2: any = useRef();

  const insertImage = (url) => {
    editor.current.insertHTML(
      `<img data-size="100%,auto" data-proportion="true" src="${host + url}" />`
    );
  };

  const addImage = async (e) => {
    e.preventDefault();
    const nuevaImagen = await LoadImage(imagen2, idUser);
    imagenInput2.current.value = "";
    setLoadImagenes((loadImagenes) => [...loadImagenes, nuevaImagen.imagen]);
  };

  const crearEvento = async (e) => {
    e.preventDefault();
    let arrayTag = [];
    tagSelect.forEach((tag) => {
      arrayTag.push(tag.label);
    });
    const nuevo = await PostEvento(
      titulo,
      imagen,
      descipcion,
      areaInput,
      idUser,
      arrayTag,
      data,
      inicio,
      fin
    );

    console.timeLog(nuevo);

    if (nuevo.errors) {
      if (nuevo.errors.titulo) {
        notify("El titulo es obligatorio");
      }
      if (nuevo.errors.subtitulo) {
        notify("El subtitulo es obligatorio");
      }
      if (nuevo.errors.imagen) {
        notify("La imagen es obligatoria y en formato JPG, JPGE o PNG");
      }
      if (nuevo.errors.descImg) {
        notify("La descripción de la imagen es obligatoria");
      }
      if (nuevo.errors.area_id) {
        notify("La area es obligatoria");
      }
      if (nuevo.errors.cuerpo) {
        Swal.fire(
          "No es posible agregar imagenes desde word al cuerpo.",
          "Para corregir este error debe ingresar las imagenes por link",
          "error"
        );
      }
      if (fin === "") {
        notify("Debe ingresar una fecha de termino de evento");
      }
    }
    if (nuevo.mensaje) {
      Swal.fire("Evento creado con exito", "", "success").then((result) => {
        if (result.isConfirmed) {
          router.back();
        }
      });
    }
  };

  const notify = (mensaje) => toast.error(mensaje);

  const config = {
    height: "100%",
    font: ["Arial", "tahoma", "Courier New,Courier"],
    defaultStyle: "font-family: Arial; font-size:16px; line-height: 1;",
    imageFileInput: false,
    videoFileInput: false,
    buttonList: [
      // default
      ["undo", "redo"],
      [
        ":p-Opciones de Texto-default.more_paragraph",
        "font",
        "fontSize",
        "formatBlock",
      ],
      ["bold", "underline", "italic", "strike"],
      ["fontColor", "hiliteColor"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["align", "horizontalRule", "list"],
      [
        "-right",
        ":i-Vistas-default.more_vertical",
        "fullScreen",
        "preview",
        "print",
      ],
      ["-right", ":r-Mas opciones-default.more_plus", "table"],
      ["-right", "image", "video", "audio", "link"],
      // (min-width: 992)
      [
        "%992",
        [
          ["undo", "redo"],
          [
            ":p-Opciones de Texto-default.more_paragraph",
            "font",
            "fontSize",
            "formatBlock",
          ],
          ["bold", "underline", "italic", "strike"],
          [
            ":t-Opciones de texto-default.more_text",
            "fontColor",
            "hiliteColor",
          ],
          ["removeFormat"],
          ["outdent", "indent"],
          ["align", "horizontalRule", "list"],
          [
            "-right",
            ":i-Vistas-default.more_vertical",
            "fullScreen",
            "preview",
            "print",
          ],
          [
            "-right",
            ":r-Más opciones-default.more_plus",
            "table",
            "link",
            "image",
            "video",
            "audio",
          ],
        ],
      ],
      // (min-width: 767)
      [
        "%767",
        [
          ["undo", "redo"],
          [
            ":p-Opciones de texto-default.more_paragraph",
            "font",
            "fontSize",
            "formatBlock",
          ],
          [
            ":t-Opciones de formato-default.more_text",
            "bold",
            "underline",
            "italic",
            "strike",
            "fontColor",
            "hiliteColor",
            "textStyle",
          ],
          ["removeFormat"],
          ["outdent", "indent"],
          [
            ":e-líneas-default.more_horizontal",
            "align",
            "horizontalRule",
            "list",
          ],
          [
            ":r-Más Opciones-default.more_plus",
            "table",
            "link",
            "image",
            "video",
            "audio",
          ],
          [
            "-right",
            ":i-Vistas-default.more_vertical",
            "fullScreen",
            "preview",
            "print",
          ],
        ],
      ],
      // (min-width: 480)
      [
        "%480",
        [
          ["undo", "redo"],
          [
            ":p-More Paragraph-default.more_paragraph",
            "font",
            "fontSize",
            "formatBlock",
            "paragraphStyle",
            "blockquote",
          ],
          [
            ":t-More Text-default.more_text",
            "bold",
            "underline",
            "italic",
            "strike",
            "subscript",
            "superscript",
            "fontColor",
            "hiliteColor",
            "textStyle",
            "removeFormat",
          ],
          [
            ":e-More Line-default.more_horizontal",
            "outdent",
            "indent",
            "align",
            "horizontalRule",
            "list",
            "lineHeight",
          ],
          [
            ":r-More Rich-default.more_plus",
            "table",
            "link",
            "image",
            "video",
            "audio",
          ],
          [
            "-right",
            ":i-More Misc-default.more_vertical",
            "fullScreen",
            "preview",
            "print",
          ],
        ],
      ],
    ],
  };

  useEffect(() => {
    async function cargarAreas() {
      const isLoaded = await LoadAreas();
      if (isLoaded.length > 0) {
        setLoadArea(true);
        setArea(isLoaded);
      }
    }
    async function cargarTags() {
      const isLoaded = await LoadTags();
      if (isLoaded.length > 0) {
        setLoadTags(true);
        setTags(isLoaded);
      }
    }
    cargarAreas();
    cargarTags();
  }, []);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <div>
      <MDBRow className="mt-3 justify-content-end align-items-center">
        <MDBCol size="12" md="6" className="text-right">
          <i> Para desplazarse presione siguiente o anterior</i>
        </MDBCol>
        <MDBCol className="m-1" size="12" md="2">
          <Button
            block
            size="lg"
            appearance="primary"
            onClick={onPrevious}
            disabled={step === 0}
          >
            Anterior
          </Button>
        </MDBCol>
        <MDBCol className="m-1" size="12" md="2">
          <Button
            block
            size="lg"
            appearance="primary"
            onClick={onNext}
            disabled={step === 2}
          >
            Siguiente
          </Button>
        </MDBCol>
      </MDBRow>
      <Steps current={step}>
        <Steps.Item title="Datos" description="Evento" />
        <Steps.Item title="Cuerpo" description="Evento" />
        <Steps.Item title="Vista Previa" description="Evento" />
      </Steps>
      <hr />
      <form onSubmit={(e) => crearEvento(e)}>
        {step + 1 === 1 ? (
          <>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="12">
                <ControlLabel for="titulo">Titulo</ControlLabel>
                <input
                  className="form-control"
                  maxLength={250}
                  type="text"
                  id="titulo"
                  placeholder="Titulo del evento"
                  name="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  El título debe ser una oración breve, clara y precisa del
                  evento. Este campo es obligatorio. (máximo 100 caracteres)
                </Form.Text>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="inicio">Fecha Inicio</ControlLabel>
                <input
                  className="form-control"
                  type="datetime-local"
                  id="inicio"
                  name="inicio"
                  value={inicio}
                  onChange={(e) => setInicio(e.target.value)}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  La fecha de inicio indica el comienzo del evento, esta fecha
                  no puede ser menor al dia de hoy.
                </Form.Text>
              </MDBCol>
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="fin">Fecha Termino</ControlLabel>
                <input
                  className="form-control"
                  type="datetime-local"
                  id="fin"
                  name="fin"
                  value={fin}
                  onChange={(e) => setFin(e.target.value)}
                  min={inicio}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  La fecha de termino indica cuando culmina el evento, esta
                  fecha no puede ser menor a la fecha de inicio.
                </Form.Text>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="imagen">Imagen</ControlLabel>
                <input
                  className="form-control"
                  type="file"
                  id="imagen"
                  name="imagen"
                  ref={imagenInput}
                  onChange={(e) => setImagen(e.target.files[0])}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  La imagen es un soporte visual que acompaña el contenido del
                  evento y que sirve para ofrecer una información extra que
                  ayuda a comprender mejor el evento.{" "}
                  <b> La imagen es opcional</b> (Resoluciones recomendadas 1280
                  x 720)
                </Form.Text>
              </MDBCol>
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="descimg">Descripción Imagen</ControlLabel>
                <input
                  className="form-control"
                  type="text"
                  maxLength={250}
                  id="descImg"
                  placeholder="Descripción de la imagen"
                  value={descipcion}
                  name="descImg"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  Texto alternativo que describe a la imagen. Si se ingresa una
                  imagen este campo es obligatorio. (máximo 100 caracteres)
                </Form.Text>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="areaInput">Area</ControlLabel>
                <select
                  id="areaInput"
                  name="areaInput"
                  className="custom-select"
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                >
                  <option selected>Selecciona una area</option>
                  {loadArea &&
                    area.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  Corresponde una de las areas de la DGE. Este campo es
                  obligatorio.
                </Form.Text>
              </MDBCol>

              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="tags">Tags</ControlLabel>
                {loadTags && (
                  <CreatableSelect
                    id="tags"
                    name="tags"
                    isClearable
                    isMulti
                    placeholder="Agrega tags a los eventos..."
                    options={tags}
                    value={tagSelect}
                    menuPlacement="auto"
                    onChange={(e) => setTagSelect(e)}
                  />
                )}
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  Incluya etiquetas al evento para vincular este evento con
                  otros del sistema. La etiqueta es una sola palabra que
                  relaciona a los eventos. Escriba la etiqueta y presione enter.
                  Puede agregar cuantas etiquetas requiera el evento.
                </Form.Text>
              </MDBCol>
            </MDBRow>
          </>
        ) : null}

        {step + 1 === 2 ? (
          <MDBRow className="mx-2 align-item-center justify-content-center">
            <MDBCol className="my-3" size="12" md="5">
              <SunEditor
                getSunEditorInstance={getSunEditorInstance}
                lang="es"
                defaultValue={data}
                onChange={(e) => setData(e as any)}
                setOptions={config as any}
              />
            </MDBCol>
            <MDBCol className="my-3" size="12" md="4">
              <h5>Galería de imagenes:</h5>
              <hr />
              <MDBRow>
                <MDBCol size="8">
                  <input
                    className="form-control"
                    type="file"
                    id="image"
                    placeholder="Agrega imagenes.."
                    name="image"
                    ref={imagenInput2}
                    onChange={(e) => setImagen2(e.target.files[0])}
                  />
                </MDBCol>
                <MDBCol size="4">
                  <Button onClick={addImage} color="blue">
                    Subir
                  </Button>
                </MDBCol>
              </MDBRow>
              {loadImagenes.map((imagen, index) => (
                <MDBRow key={index} className="my-3 p-1 border">
                  <MDBCol size="7">
                    <img
                      src={host + imagen.url}
                      alt="..."
                      style={{
                        width: "100px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                  </MDBCol>
                  <MDBCol className="align-self-center" size="5">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        insertImage(imagen.url);
                      }}
                      color="blue"
                    >
                      Agregar
                    </Button>
                  </MDBCol>
                </MDBRow>
              ))}
            </MDBCol>
          </MDBRow>
        ) : null}
        {step + 1 === 3 ? (
          <>
            <MDBRow className="mx-2">
              <div className="modal-dialog modal-xs">
                <div className="modal-content">
                  <div className="modal-header">
                    <b>{titulo}</b>
                    <button type="button" className="close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <img
                    className="w-100"
                    src={imagen ? URL.createObjectURL(imagen) : null}
                    alt={descipcion}
                  />
                  <br />
                  <p className="m-0">
                    Inicio evento:{" "}
                    {inicio ? (
                      new Date(inicio).toLocaleString(undefined, {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })
                    ) : (
                      <span className="text-warning">
                        Si no ingresa fecha de inicio, el evento inicia desde
                        ahora.
                      </span>
                    )}
                  </p>
                  <p className="m-0">
                    Termino evento:{" "}
                    {fin ? (
                      new Date(fin).toLocaleString(undefined, {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })
                    ) : (
                      <span className="text-danger">
                        la fecha de termino es obligatoria.
                      </span>
                    )}
                  </p>
                  <h4>Detalles:</h4>
                  <div
                    className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable py-0"
                    style={{
                      height: "100%",
                      fontFamily: "Arial",
                      fontSize: "16px",
                      lineHeight: "1",
                    }}
                    dangerouslySetInnerHTML={{ __html: data }}
                  ></div>
                </div>
              </div>
            </MDBRow>
            <ButtonToolbar>
              <Button type="submit" size="lg" color="green" className="px-5">
                Publicar
              </Button>
              <i> *El evento será publicado según el area</i>
            </ButtonToolbar>
          </>
        ) : null}
      </form>
      <hr />
      <ButtonGroup>
        <Button
          className="mb-5"
          size="lg"
          appearance="primary"
          onClick={onPrevious}
          disabled={step === 0}
        >
          Anterior
        </Button>
        <Button
          className="mb-5"
          size="lg"
          appearance="primary"
          onClick={onNext}
          disabled={step === 2}
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <ToastContainer />
    </div>
  );
};
