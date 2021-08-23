import { host } from "../public/js/host";
const PostAnuncio = async (descripcion, area, texto) => {
  const dataIn = new FormData();
  dataIn.append("descripcion", descripcion);
  if (area !== "") {
    dataIn.append("area_id", area);
  }

  dataIn.append("texto", texto);
  console.log(dataIn);
  const url = host + "/api/v1/anuncios";
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

export default PostAnuncio;
