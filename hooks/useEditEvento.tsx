import { host } from "../public/js/host";
const EditEvento = async (
  id,
  titulo,
  imagen,
  descipcion,
  area,
  id_user,
  tags,
  cuerpo,
  inicio,
  fin
) => {
  const dataIn = new FormData();
  if (imagen !== undefined) {
    dataIn.append("imagen", imagen);
  }
  dataIn.append("titulo", titulo);
  dataIn.append("descImg", descipcion);
  dataIn.append("area_id", area);
  dataIn.append("user_id", id_user);
  dataIn.append("cuerpo", cuerpo);
  tags.forEach((tag) => {
    dataIn.append("tag[]", tag);
  });
  if (inicio === "") {
    dataIn.append("inicio", new Date(Date.now()).toISOString().slice(0, 16));
  } else {
    dataIn.append("inicio", inicio);
  }
  dataIn.append("fin", fin);

  const url = host + "/api/v1/eventos/" + id;
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

export default EditEvento;
