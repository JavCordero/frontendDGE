import { host } from "../public/js/host";
const editNoticia = async (
  id,
  titulo,
  imagen,
  subtitulo,
  descipcion,
  area,
  id_user,
  tags,
  cuerpo,
  links
) => {
  const dataIn = new FormData();
  dataIn.append("imagen", imagen);
  dataIn.append("titulo", titulo);
  dataIn.append("subtitulo", subtitulo);
  dataIn.append("descImg", descipcion);
  dataIn.append("area_id", area);
  dataIn.append("user_id", id_user);
  dataIn.append("cuerpo", cuerpo);
  tags.forEach((tag) => {
    dataIn.append("tag[]", tag);
  });
  links.forEach((link) => {
    dataIn.append("links[]", link);
  });
  const url = host + "/api/v1/noticias/" + id;
  const res = await fetch(url, {
    method: "POST",
    body: dataIn,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await res.json();

  return data;
};

export default editNoticia;
