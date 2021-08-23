import React, { useEffect, useRef, useState } from "react";
import SunEditorCore from "suneditor/src/lib/core";
import LoadImage from "../../hooks/useLoadImage";
import { host } from "../../public/js/host";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import getImagesByUser from "../../hooks/useGetImagesbyUser";
import LoadAreas from "../../hooks/useLoadArea";

import dynamic from "next/dynamic";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Button, Steps, ControlLabel, ButtonToolbar } from "rsuite";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import PostAnuncio from "../../hooks/usePostAnuncio";
import router from "next/router";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export const FormAddAnuncio = ({ idUser }) => {
  const [step, setStep] = useState(0);
  const [loadArea, setLoadArea] = useState(false);
  const [area, setArea] = useState([]);
  const [data, setData] = useState("");
  const [loadImagenes, setLoadImagenes] = useState([]);

  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const [descripcion, setDescripcion] = useState("");

  const [areaInput, setAreaInput] = useState("");

  const [imagen2, setImagen2] = useState<File | undefined>(undefined);

  const imagenInput2 = useRef();

  const insertImage = (url) => {
    editor.current.insertHTML(
      `<img data-size="100%,auto" data-proportion="true" src="${host + url}" />`
    );
  };

  const addImage = async (e) => {
    e.preventDefault();
    const nuevaImagen = await LoadImage(imagen2, idUser);
    setImagen2(undefined);
    console.log(nuevaImagen);
  };

  const crearAnuncio = async (e) => {
    e.preventDefault();
    const nuevo = await PostAnuncio(descripcion, areaInput, data);

    console.log(nuevo);

    if (nuevo.errors) {
      if (nuevo.errors.descripcion) {
        notify("El titulo es obligatorio");
      }
      if (nuevo.errors.area_id) {
        notify("La area es obligatoria");
      }
      if (nuevo.errors.texto) {
        Swal.fire(
          "No es posible agregar imagenes desde word al cuerpo.",
          "Para corregir este error debe ingresar las imagenes por link",
          "error"
        );
      }
    }
    if (nuevo.mensaje) {
      Swal.fire("Anuncio creado con exito", "", "success").then((result) => {
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
    async function cargarImagenes() {
      const isLoaded = await getImagesByUser(idUser);
      if (isLoaded.length > 0) {
        setLoadImagenes(isLoaded);
      }
    }
    cargarImagenes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagen2]);

  useEffect(() => {
    async function cargarAreas() {
      const isLoaded = await LoadAreas();
      if (isLoaded.length > 0) {
        setLoadArea(true);
        setArea(isLoaded);
      }
    }
    cargarAreas();
  }, []);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 2 ? 2 : nextStep);
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
            disabled={step === 1}
          >
            Siguiente
          </Button>
        </MDBCol>
      </MDBRow>
      <Steps current={step}>
        <Steps.Item title="Datos" description="Anuncio" />
        <Steps.Item title="Vista Previa" description="Anuncio" />
      </Steps>
      <hr />
      <form onSubmit={(e) => crearAnuncio(e)}>
        {step + 1 === 1 ? (
          <>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="12">
                <ControlLabel for="titulo">Descripción</ControlLabel>
                <input
                  className="form-control"
                  maxLength={250}
                  type="text"
                  id="descripcion"
                  placeholder="Titulo del evento"
                  name="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  Breve descripción que identifica al anuncio. (máximo 100
                  caracteres)
                </Form.Text>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="12">
                <ControlLabel for="areaInput">Area</ControlLabel>
                <select
                  id="areaInput"
                  name="areaInput"
                  className="custom-select"
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                >
                  <option selected>Pagina de Inicio</option>
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
                  Seleccione el area donde se desplegará el anuncio. Este campo
                  es obligatorio.
                </Form.Text>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-2 align-item-center justify-content-center">
              <MDBCol className="my-3" size="12" md="8">
                <h6>Información sobre el anuncio:</h6>
                <hr />
                <SunEditor
                  getSunEditorInstance={getSunEditorInstance}
                  lang="es"
                  defaultValue={data}
                  onChange={(e) => setData(e as any)}
                  setOptions={config as any}
                />
              </MDBCol>
              <MDBCol className="my-3" size="12" md="4">
                <h6>Galería de imagenes:</h6>
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
          </>
        ) : null}

        {step + 1 === 2 ? (
          <>
            <MDBRow className="mx-2">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable py-0"
                    dangerouslySetInnerHTML={{ __html: data }}
                  ></div>
                </div>
              </div>
            </MDBRow>
            <ButtonToolbar>
              <Button type="submit" size="lg" color="green">
                Publicar
              </Button>
              <i> *El evento será publicado según el area</i>
            </ButtonToolbar>
          </>
        ) : null}
      </form>
      <hr />
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
            disabled={step === 1}
          >
            Siguiente
          </Button>
        </MDBCol>
      </MDBRow>
      <ToastContainer />
    </div>
  );
};
