export interface Values {
  titulo?: string;
  subtitulo?: string;
  imagen?: File;
  descImg?: string;
  areaInput?: string;
  tagsInput?: Array<string>;
  cuerpo?: string;
}

export interface Errores {
  titulo?: string;
  subtitulo?: string;
  imagen?: string;
  descImg?: string;
  areaInput?: string;
  tagsInput?: string;
  cuerpo?: string;
}

export default function createNoticiaValidation(values: Values) {
  let errores: Errores = {};

  /*   //validar el titulo
  if (!values.titulo) {
    errores.titulo = "El titulo es obligatorio";
  }

  //validar el subtitulo
  if (!values.subtitulo) {
    errores.subtitulo = "El Subtitulo es obligatorio";
  }

  //validar el imagen
  if (!values.imagen) {
    errores.imagen = "La imagen es obligatoria";
  }

  //validar el descripcion
  if (!values.descImg) {
    errores.descImg = "La descripcion es obligatoria";
  } */

  return errores;
}
