import { host } from "../public/js/host";
const deleteNoticia = async (id) => {
  const url = host + "/api/v1/noticias/" + id;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await res.json();

  return data;
};

export default deleteNoticia;
