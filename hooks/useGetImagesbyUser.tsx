import { host } from "../public/js/host";
const getImagesByUser = async (id_user) => {
  const dataIn = new FormData();
  dataIn.append("user_id", id_user);
  const url = host + "/api/v1/imagenesusuario";
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

export default getImagesByUser;
