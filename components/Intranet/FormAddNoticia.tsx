import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonToolbar, ControlLabel, Steps } from "rsuite";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import LoadAreas from "../../hooks/useLoadArea";
import CreatableSelect from "react-select/creatable";
import LoadTags from "../../hooks/useLoadTags";
import SunEditorCore from "suneditor/src/lib/core";

import dynamic from "next/dynamic";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

import PostNoticia from "../../hooks/usePostNoticia";
import Swal from "sweetalert2";
import router from "next/router";
import { toast, ToastContainer } from "react-toastify";
import LoadImage from "../../hooks/useLoadImage";
import getImagesByUser from "../../hooks/useGetImagesbyUser";
import { host } from "../../public/js/host";
import { Form } from "react-bootstrap";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoticiaHeaderContent from "../noticias/noticia__recursos/NoticiaHeaderContent";
import image from "next/image";
import NoticiaHeader from "../noticias/noticia__recursos/NoticiaHeader";
import NoticiaLinks from "../noticias/noticia__recursos/NoticiaLinks";
import NoticiaBotones from "../noticias/noticia__recursos/NoticiaBotones";
import NoticiaFechaDatos from "../noticias/noticia__recursos/NoticiaFechaDatos";
import NoticiaContenido from "../noticias/noticia__recursos/NoticiaContenido";
import NoticiaTags from "../noticias/noticia__recursos/NoticiaTags";
import Link from "next/link";

export const FormAddNoticia = ({ idUser }) => {
  const [step, setStep] = useState(0);
  const [loadArea, setLoadArea] = useState(false);
  const [area, setArea] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadTags, setLoadTags] = useState(false);
  const [data, setData] = useState(
    '<p><span style="font-family: Arial; font-size: 18px;">En esta sección puede redactar la noticia.</span></p><p><span style="font-size: 18px;"><span style="color: rgb(241, 241, 241);"><span style="background-color: rgb(255, 0, 0);"><span style="font-family: Arial;"><strong><u><font face="Arial">Antes de editar esta </font>sección<font face="Arial">&nbsp;recuerde leer el manual para insertar videos e imágenes&nbsp;al sistema.&nbsp;</font></u></strong></span></span></span></span></p><p><span style="font-size: 18px;"><span style="font-family: Arial;"><font face="Arial">Insertar videos desde YouTube&nbsp;mediante el </font>botón<font face="Arial">&nbsp;video, pegando el link del video, Ejemplo:</font></span></span></p><div class="se-component se-video-container __se__float-center" contenteditable="false" style="width: 50%; min-width: 100%;"><figure style="height: 56.25%; padding-bottom: 28.13%; margin: auto; width: 50%;"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/g8M5JPsfQYA" data-proportion="true" data-percentage="50,56.25%" data-size="50%,56.25%" data-align="center" style="width: 100%; height: 100%;" data-index="0" data-file-name="g8M5JPsfQYA" data-file-size="0" data-origin="100%,56.25%" data-rotate="" data-rotatex="" data-rotatey=""></iframe></figure></div><p><br></p><hr class="__se__solid"><p><span style="font-family: Arial; font-size: 18px;">Crear tablas:</span></p><table><!--StartFragment--><tbody><tr><td rowspan="2"><div>CARRERAS</div></td><td colspan="6"><div>INGRESOS   ESPECIALES UCN 2021</div></td></tr><tr><td><div>PROFESIONAL</div></td><td><div>EXTRANJERO</div></td><td><div>CEDUC UCN</div></td><td><div>DEPORTISTA</div></td><td><div>PUEBLOS&nbsp;ORIGINARIOS</div></td><td><div>SIT. DISCAP.</div></td></tr><tr><td><div>ANTOFAGASTA</div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td></tr><tr><td><div>ANALÍSTA QUÍMICO</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td></tr><tr><td><div>ARQUITECTURA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td><td><div>1</div></td><td><div>1</div></td><td><div>0</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td></tr><tr><td><div>CONTADOR   AUDITOR-CONTADOR PÚBLICO</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>1</div></td></tr><tr><td><div>DERECHO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td><td><div>2</div></td><td><div>1</div></td><td><div>0</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td></tr><tr><td><div>GEOLOGÍA</div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td></tr><tr><td><div>INGENIERÍA CIVIL</div></td><td><div>2</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA CIVIL   AMBIENTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA CIVIL DE MINAS</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA CIVIL   EN COMPUTACIÓN E   INF.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;   &nbsp;</div></td><td><div>2</div></td><td><div>2</div></td><td><div>2</div></td><td><div>2</div></td><td><div>2</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA CIVIL   EN GESTIÓN DE LA CONSTRUCCION</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA CIVIL   INDUSTRIAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td><td><div><br></div></td></tr><tr><td><div>INGENIERÍA CIVIL METALÚRGICA</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA CIVIL QUÍMICA</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>3</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA   CIVIL-PLAN   COMUN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td><td><div>5</div></td><td><div>5</div></td><td><div>5</div></td><td><div>5</div></td><td><div>5</div></td><td><div>1</div></td></tr><tr><td><div>INGENIERÍA   COMERCIAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td><td><div>1</div></td></tr><!--EndFragment--></tbody></table><hr class="__se__solid"><p><span style="font-family: Arial; font-size: 18px;">Tutorial para cargar imágenes en una noticia:</span><br></p><ol><li style="font-size: 18px; font-weight: bold;"><span style="font-family: Arial; font-size: 18px;"><strong>&nbsp;Hacer clic en elegir archivo en la sección de galería de imágenes.</strong></span></li></ol><div class="se-component se-image-container __se__float-center" contenteditable="false"><figure style="margin: auto; width: 309px;"><img src="/tutorial/imagen1.png" alt="" data-proportion="true" data-size="309px,188px" data-align="center" data-file-name="imagen1.png" data-file-size="0" origin-size="365,224" data-origin="365px,224px" style="width: 309px; height: 188px;" data-index="9"></figure></div><p style="font-size: 18px;"></p><p><span style="font-family: Arial; font-size: 18px;"><strong>&nbsp; &nbsp; 2. Seleccionar el archivo desde el PC</strong></span>​</p><div class="se-component se-image-container __se__float-center" contenteditable="false"><figure style="margin: auto; width: 362px;"><img src="/tutorial/imagen2.png" alt="" data-proportion="true" data-size="362px,221px" data-align="center" data-file-name="imagen2.png" data-file-size="0" origin-size="949,460" data-origin="949px,460px" style="width: 362px; height: 221px;" data-index="7"></figure></div><div><br><span style="font-size: 18px;"><span style="font-family: Arial;"><strong>&nbsp; &nbsp; 3. Clic en subir para cargar la imagen al sistema</strong></span></span><br><br></div><div class="se-component se-image-container __se__float-center" contenteditable="false"><figure style="margin: auto; width: 306px;"><img src="/tutorial/imagen3.png" alt="" data-proportion="true" data-size="306px,173px" data-align="center" data-index="2" data-file-name="imagen3.png" data-file-size="0" origin-size="349,197" data-origin="349px,197px" style="width: 306px; height: 173px;"></figure></div><div><br><span style="font-size: 18px;"><span style="font-family: Arial;">​<strong>&nbsp; &nbsp; 4. Clic donde deseas insertar la imagen... y clic en agregar para agregar la imagen a la noticia.</strong></span></span><br><br></div><div class="se-component se-image-container __se__float-none" contenteditable="false"><figure style="margin: 0px; width: 977px;"><img src="/tutorial/imagen4.png" alt="" data-proportion="true" data-size="977px,214px" data-align="none" data-index="3" data-file-name="imagen4.png" data-file-size="0" origin-size="1263,277" data-origin="977px,214px" style="width: 977px; height: 214px;"></figure></div><div><br><b style="font-family: Arial; font-size: 18px;"><span style="font-family: Arial;">&nbsp; &nbsp; 5. Una vez cargada la imagen, puedes disponer de ella para modificar su tamaño, <font face="Arial">posición</font>&nbsp;u <font face="Arial">orientación</font>.</span></b><span style="font-family: Arial;"></span><br><br></div><div class="se-component se-image-container __se__float-center" contenteditable="false"><figure style="margin: auto; width: 622px;"><img src="/tutorial/imagen5.png" alt="" data-proportion="true" data-size="622px,475px" data-align="center" data-index="4" data-file-name="imagen5.png" data-file-size="0" origin-size="764,583" data-origin="764px,583px" style="width: 622px; height: 475px;"></figure></div>'
  );
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
  const [imagen2, setImagen2] = useState<File | undefined>(undefined);
  const [links, setLinks] = useState([]);

  const imagenInput = useRef();
  const imagenInput2: any = useRef();

  const insertImage = (url) => {
    editor.current.insertHTML(`<img src="${host + url}" />`);
  };

  const addImage = async (e) => {
    e.preventDefault();
    const nuevaImagen = await LoadImage(imagen2, idUser);
    imagenInput2.current.value = "";
    setLoadImagenes((loadImagenes) => [...loadImagenes, nuevaImagen.imagen]);
  };

  const crearNoticia = async (e) => {
    e.preventDefault();
    let arrayTag = [];
    let arrayLinks = [];
    tagSelect.forEach((tag) => {
      arrayTag.push(tag.label);
    });
    links.forEach((link) => arrayLinks.push(link.label));
    const nuevo = await PostNoticia(
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
      Swal.fire("Noticia creada con exito", "", "success").then((result) => {
        if (result.isConfirmed) {
          router.back();
        }
      });
    }
  };

  const clickHandle = (link) => {
    document.location.href = link;
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
        <Steps.Item title="Datos" description="Noticia" />
        <Steps.Item title="Cuerpo" description="Noticia" />
        <Steps.Item title="Vista Previa" description="Noticia" />
      </Steps>
      <hr />
      <form onSubmit={(e) => crearNoticia(e)}>
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
                  (Opcional) Incluya vínculos o referencias a otras paginas,
                  escriba o pegue el vinculo y presione enter.
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
              <h5>Galería de Imagenes:</h5>
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
              <div className="noticia">
                <NoticiaHeader>
                  <NoticiaHeaderContent
                    title={titulo}
                    src={imagen ? URL.createObjectURL(imagen) : null}
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
                    style={{
                      height: "100%",
                      fontFamily: "Arial",
                      fontSize: "16px",
                      lineHeight: "1",
                    }}
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
            </MDBRow>
            <ButtonToolbar className="mt-4">
              <Button type="submit" size="lg" color="green" className="px-5">
                Publicar
              </Button>
              <i> *La noticia será publicada según el area</i>
            </ButtonToolbar>
          </>
        ) : null}
      </form>
      <hr />

      <MDBRow className="mt-3 mb-5 justify-content-end align-items-center">
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

      <ToastContainer />
    </div>
  );
};
