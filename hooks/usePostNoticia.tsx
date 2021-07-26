const PostNoticia = async (
  titulo,
  imagen,
  subtitulo,
  descipcion,
  area,
  id_user,
  tags,
  cuerpo
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
  const url = "http://127.0.0.1:8000/api/v1/noticias";
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

export default PostNoticia;
