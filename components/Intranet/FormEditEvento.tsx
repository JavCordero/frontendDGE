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
import getEventoId from "../../hooks/useGetEventoId";
import EditEvento from "../../hooks/useEditEvento";

import getImagesByUser from "../../hooks/useGetImagesbyUser";
import { host } from "../../public/js/host";
import LoadImage from "../../hooks/useLoadImage";

export const FormEditEvento = ({ idUser, eventoId }) => {
  const [step, setStep] = useState(0);
  const [loadArea, setLoadArea] = useState(false);
  const [area, setArea] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadTags, setLoadTags] = useState(false);
  const [data, setData] = useState();
  const [loadImagenes, setLoadImagenes] = useState([]);

  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const [tagSelect, setTagSelect] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [inicio, setInicio] = useState("2020-01-01 01:01:01");
  const [fin, setFin] = useState("2020-01-01 01:01:01");

  const [descipcion, setDescripcion] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [imagen, setImagen] = useState<File | undefined>(undefined);

  const [imagen2, setImagen2] = useState<File | undefined>(undefined);

  const imagenInput = useRef();
  const imagenInput2 = useRef();

  const insertImage = (url) => {
    editor.current.insertHTML(`<img src="${host + url}" />`);
  };

  const addImage = async (e) => {
    e.preventDefault();
    const nuevaImagen = await LoadImage(imagen2, idUser);
    setImagen2(undefined);
    console.log(nuevaImagen);
  };

  const editarEvento = async (e) => {
    e.preventDefault();
    let arrayTag = [];
    tagSelect.forEach((tag) => {
      arrayTag.push(tag.label);
    });
    const nuevo = await EditEvento(
      eventoId,
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

    if (nuevo.errors) {
      if (nuevo.errors.titulo) {
        notify("El titulo es obligatorio");
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
    }
    if (nuevo.mensaje) {
      Swal.fire("Evento editado con exito", "", "success").then((result) => {
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
  }, [imagen2]);

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

    async function loadData() {
      const isLoaded = await getEventoId(eventoId);
      console.log(isLoaded);
      setTitulo(isLoaded.titulo);
      setFin(isLoaded.fin.replace(" ", "T"));
      setInicio(isLoaded.inicio.replace(" ", "T"));
      setDescripcion(isLoaded.desc_img);
      setAreaInput(isLoaded.area.id);
      isLoaded.tags.forEach((tag, index) => {
        tagSelect.push({ value: index + 1, label: tag.name });
      });

      setData(isLoaded.cuerpo);
      setTagSelect([...tagSelect]);
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <div>
      <Steps current={step}>
        <Steps.Item title="Datos" description="Evento" />
        <Steps.Item title="Cuerpo" description="Evento" />
        <Steps.Item title="Vista Previa" description="Evento" />
      </Steps>
      <hr />
      <form onSubmit={(e) => editarEvento(e)}>
        {step + 1 === 1 ? (
          <>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="12">
                <ControlLabel for="titulo">Titulo</ControlLabel>
                <input
                  className="form-control"
                  type="text"
                  id="titulo"
                  placeholder="Titulo del evento"
                  name="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
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
                  onChange={(e) => {
                    setInicio(e.target.value);
                  }}
                />
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
              </MDBCol>
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="descimg">Descripción Imagen</ControlLabel>
                <input
                  className="form-control"
                  type="text"
                  id="descImg"
                  placeholder="Descripción de la imagen"
                  value={descipcion}
                  name="descImg"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
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
              </MDBCol>
            </MDBRow>
          </>
        ) : null}

        {step + 1 === 2 ? (
          <MDBRow className="mx-2">
            <MDBCol className="my-3" size="12" md="9">
              <SunEditor
                getSunEditorInstance={getSunEditorInstance}
                lang="es"
                defaultValue={data}
                onChange={(e) => setData(e as any)}
                setOptions={config as any}
              />
            </MDBCol>
            <MDBCol className="my-3" size="12" md="3">
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
              <MDBCol className="my-3" size="12">
                <div
                  className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable"
                  dangerouslySetInnerHTML={{ __html: data }}
                ></div>
              </MDBCol>
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
