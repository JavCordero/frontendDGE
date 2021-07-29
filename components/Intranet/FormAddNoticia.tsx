import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  ControlLabel,
  Dropdown,
  Form,
  FormControl,
  FormGroup,
  HelpBlock,
  Input,
  Panel,
  SelectPicker,
  Steps,
  TagPicker,
} from "rsuite";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import LoadAreas from "../../hooks/useLoadArea";
import CreatableSelect from "react-select/creatable";
import LoadTags from "../../hooks/useLoadTags";
import { CKEditor } from "ckeditor4-react";

import PostNoticia from "../../hooks/usePostNoticia";
import Swal from "sweetalert2";
import router from "next/router";
import { toast, ToastContainer } from "react-toastify";

export const FormAddNoticia = ({ idUser }) => {
  const [step, setStep] = useState(0);
  const [loadArea, setLoadArea] = useState(false);
  const [area, setArea] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadTags, setLoadTags] = useState(false);
  const [data, setData] = useState();

  const [tagSelect, setTagSelect] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [subTitulo, setSubTitulo] = useState("");
  const [descipcion, setDescripcion] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [imagen, setImagen] = useState<File | undefined>(undefined);
  const [links, setLinks] = useState([]);

  const imagenInput = useRef();

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
    }
    if (nuevo.mensaje) {
      Swal.fire("Noticia creada con exito", "", "success").then((result) => {
        if (result.isConfirmed) {
          router.back();
        }
      });
    }
  };

  const notify = (mensaje) => toast.error(mensaje);

  const config = {
    removeButtons:
      "Source,Save,NewPage,Preview,Templates,PasteText,PasteFromWord,Replace,Find,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Unlink,Anchor,Flash,Table,PageBreak,Maximize,ShowBlocks,About",
    height: "600px",
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
      <Steps current={step}>
        <Steps.Item title="Datos" description="Noticia" />
        <Steps.Item title="Cuerpo" description="Noticia" />
        <Steps.Item title="Vista Previa" description="Noticia" />
      </Steps>
      <hr />
      <form onSubmit={(e) => crearNoticia(e)}>
        {step + 1 === 1 ? (
          <>
            <MDBRow className="mx-5">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="titulo">Titulo</ControlLabel>
                <input
                  className="form-control"
                  type="text"
                  id="titulo"
                  placeholder="Titulo de la noticia"
                  name="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </MDBCol>
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="subtitulo">Subtitulo</ControlLabel>
                <input
                  className="form-control"
                  type="text"
                  id="subtitulo"
                  placeholder="Subtitulo de la noticia"
                  name="subtitulo"
                  value={subTitulo}
                  onChange={(e) => setSubTitulo(e.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow className="mx-5">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="imagen">Imagen</ControlLabel>
                <input
                  className="form-control"
                  type="file"
                  id="imagen"
                  placeholder="Imagen de la noticia"
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
            <MDBRow className="mx-5">
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
                    placeholder="Agrega tags a la noticia..."
                    options={tags}
                    value={tagSelect}
                    menuPlacement="auto"
                    onChange={(e) => setTagSelect(e)}
                  />
                )}
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-5 justify-content-center align-items-center">
              <MDBCol className="my-3" size="12" md="6">
                <ControlLabel for="links">Links de interes</ControlLabel>
                <CreatableSelect
                  id="links"
                  name="links"
                  isClearable
                  isMulti
                  placeholder="Agrega Links de interes..."
                  value={links}
                  menuPlacement="auto"
                  onChange={(e) => setLinks(e)}
                />
              </MDBCol>
            </MDBRow>
          </>
        ) : null}

        {step + 1 === 2 ? (
          <MDBRow className="mx-5">
            <MDBCol className="my-3" size="12">
              <CKEditor
                type="classic"
                onChange={(e) => setData(e.editor.getData())}
                initData={
                  <div dangerouslySetInnerHTML={{ __html: data }}></div>
                }
                config={config}
              />
            </MDBCol>
          </MDBRow>
        ) : null}
        {step + 1 === 3 ? (
          <>
            <MDBRow className="mx-5">
              <MDBCol className="my-3" size="12">
                <div
                  className="cuerpoNoticia"
                  dangerouslySetInnerHTML={{ __html: data }}
                ></div>
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
      <ToastContainer />
    </div>
  );
};
