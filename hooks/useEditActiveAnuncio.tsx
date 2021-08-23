import { host } from "../public/js/host";
const EditActiveAnuncio = async (id, activo) => {
  const dataIn = new FormData();
  dataIn.append("activo", activo);
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

export default EditActiveAnuncio;
