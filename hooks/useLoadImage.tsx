import { host } from "../public/js/host";
const LoadImage = async (imagen, id_user) => {
  const dataIn = new FormData();
  dataIn.append("imagen", imagen);
  dataIn.append("user_id", id_user);
  const url = host + "/api/v1/imagenes";
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

export default LoadImage;
