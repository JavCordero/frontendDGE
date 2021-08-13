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

import getNoticiaId from "../../hooks/useGetNoticiaId";
import editNoticia from "../../hooks/useEditNoticia";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import router from "next/router";
import NoticiaHeader from "../noticias/noticia__recursos/NoticiaHeader";
import NoticiaLinks from "../noticias/noticia__recursos/NoticiaLinks";
import NoticiaBotones from "../noticias/noticia__recursos/NoticiaBotones";
import NoticiaFechaDatos from "../noticias/noticia__recursos/NoticiaFechaDatos";
import NoticiaContenido from "../noticias/noticia__recursos/NoticiaContenido";
import NoticiaTags from "../noticias/noticia__recursos/NoticiaTags";
import Link from "next/link";
import NoticiaHeaderContent from "../noticias/noticia__recursos/NoticiaHeaderContent";

import getImagesByUser from "../../hooks/useGetImagesbyUser";
import { host } from "../../public/js/host";
import LoadImage from "../../hooks/useLoadImage";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const FormEditNoticia = ({ idUser, noticiaId }) => {
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
  const [subTitulo, setSubTitulo] = useState("");
  const [descipcion, setDescripcion] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [imagen, setImagen] = useState<File | undefined>(undefined);
  const [links, setLinks] = useState([]);
  const [imagen2, setImagen2] = useState<File | undefined>(undefined);
  const [imageSrc, setImageSrc] = useState("");

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

  const notify = (mensaje) => toast.error(mensaje);

  const editarNoticia = async (e) => {
    e.preventDefault();
    let arrayTag = [];
    let arrayLinks = [];
    tagSelect.forEach((tag) => {
      arrayTag.push(tag.label);
    });
    links.forEach((link) => arrayLinks.push(link.label));
    const nuevo = await editNoticia(
      noticiaId,
      titulo,
      imagen,
      subTitulo,
      descipcion,
      areaInput,
      idUser,
      arrayTag,
      data,
      arrayLinks
    );
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
    }
    if (nuevo.mensaje) {
      Swal.fire("Noticia editada con exito", "", "success").then((result) => {
        if (result.isConfirmed) {
          router.back();
        }
      });
    }
  };

  const clickHandle = (link) => {
    document.location.href = link;
  };

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
      const isLoaded = await getNoticiaId(noticiaId);
      console.log(isLoaded);
      setImageSrc(host + isLoaded.imagen);
      setTitulo(isLoaded.titulo);
      setSubTitulo(isLoaded.subtitulo);
      setDescripcion(isLoaded.desc_img);
      setAreaInput(isLoaded.area.id);
      try {
        isLoaded.tags.forEach((tag, index) => {
          tagSelect.push({ value: index + 1, label: tag.name });
        });

        isLoaded.links.forEach((link, index) => {
          links.push({ value: index, label: link });
        });
      } catch (error) {}
      setData(isLoaded.cuerpo);
      setLinks([...links]);
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
        <Steps.Item title="Datos" description="Noticia" />
        <Steps.Item title="Cuerpo" description="Noticia" />
        <Steps.Item title="Vista Previa" description="Noticia" />
      </Steps>
      <hr />
      <form onSubmit={(e) => editarNoticia(e)}>
        {step + 1 === 1 ? (
          <>
            <MDBRow className="mx-2">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="titulo">Titulo</ControlLabel>
                <input
                  maxLength={250}
                  className="form-control"
                  type="text"
                  id="titulo"
                  placeholder="Titulo de la noticia"
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
                  El título debe ser una oración breve, clara y precisa de la
                  noticia. Este campo es obligatorio. (máximo 100 caracteres)
                </Form.Text>
              </MDBCol>
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="subtitulo">Subtitulo</ControlLabel>
                <input
                  className="form-control"
                  maxLength={250}
                  type="text"
                  id="subtitulo"
                  placeholder="Subtitulo de la noticia"
                  name="subtitulo"
                  value={subTitulo}
                  onChange={(e) => setSubTitulo(e.target.value)}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  El subtitulo o bajada de la noticia es una ampliación del
                  titulo, se debe explicar en breve de que tratará la noticia.
                  Este campo es obligatorio. (máximo 250 caracteres).
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
                  placeholder="Imagen de la noticia"
                  name="imagen"
                  ref={imagenInput}
                  onChange={(e) => {
                    setImagen(e.target.files[0]);
                  }}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  La imagen es un soporte visual que acompaña el contenido y que
                  sirve para ofrecer una información extra que ayuda a
                  comprender mejor la noticia. Este campo es obligatorio
                  (Resoluciones recomendadas 1280 x 720)
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
                  Texto alternativo que describe a la imagen. Este campo es
                  obligatorio (máximo 100 caracteres)
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
                    placeholder="Agrega tags a la noticia..."
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
                  Incluya etiquetas a la noticia para vincular esta noticia con
                  otras del sistema. La etiqueta es una sola palabra que
                  relaciona a la noticia. Escriba la etiqueta y presione enter.
                  Puede agregar cuantas etiquetas requiera la noticia.
                </Form.Text>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-2 justify-content-center align-items-center">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="links">Links de interes</ControlLabel>
                <CreatableSelect
                  id="links"
                  name="links"
                  isClearable
                  isMulti
                  placeholder="Agrega Links de interés. Ejemplo: www.ucn.cl"
                  value={links}
                  menuPlacement="auto"
                  onChange={(e) => setLinks(e)}
                />
                <Form.Text muted>
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faQuestionCircle}
                    size="1x"
                  />{" "}
                  Incluya vínculos o referencias a otras paginas, escriba o
                  pegue el vinculo y presione enter.
                </Form.Text>
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
              <h5>Galería de imágenes:</h5>
              <hr />
              <MDBRow>
                <MDBCol size="8">
                  <input
                    className="form-control"
                    type="file"
                    id="image"
                    placeholder="Agrega imágenes.."
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
                        width: "80px",
                        height: "80px",
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
                <div className="noticia">
                  <NoticiaHeader>
                    <NoticiaHeaderContent
                      title={titulo}
                      src={imagen ? URL.createObjectURL(imagen) : imageSrc}
                      alt={descipcion}
                    >
                      {subTitulo}
                    </NoticiaHeaderContent>
                  </NoticiaHeader>
                  <NoticiaLinks>
                    {links.map((link, index) => (
                      <div onClick={() => clickHandle(link.label)} key={index}>
                        {" "}
                        Enlace {1 + index}{" "}
                      </div>
                    ))}
                  </NoticiaLinks>
                  <NoticiaBotones>
                    <div>
                      <button>A+</button>
                      <button>A-</button>
                    </div>
                    <div>
                      <button>Descargar</button>
                      <button>Imprimir</button>
                    </div>
                  </NoticiaBotones>
                  <NoticiaFechaDatos>
                    <p>
                      Creado el:
                      {`${new Date().toLocaleString("es", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}`}
                    </p>
                  </NoticiaFechaDatos>
                  <NoticiaContenido>
                    <br />
                    <div
                      className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable"
                      dangerouslySetInnerHTML={{ __html: data }}
                    ></div>
                  </NoticiaContenido>
                  <NoticiaTags>
                    {tagSelect
                      ? tagSelect.map((tag, index) => (
                          <Link key={index} href="#">
                            {tag.label}
                          </Link>
                        ))
                      : null}
                  </NoticiaTags>
                </div>
              </MDBCol>
            </MDBRow>
            <ButtonToolbar>
              <Button type="submit" size="lg" color="green">
                Publicar
              </Button>
              <i> *La noticia será publicada según el area</i>
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
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};
