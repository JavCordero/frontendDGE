import { host } from "../public/js/host";
const EditAnuncio = async (id, texto, descripcion, area) => {
  const dataIn = new FormData();
  dataIn.append("texto", texto);
  dataIn.append("descipcion", descripcion);
  dataIn.append("area_id", area);
  const url = host + "/api/v1/anuncios/" + id;
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

export default EditAnuncio;
