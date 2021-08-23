import { host } from "../public/js/host";
const LoadAnuncios = async () => {
  const url = `${host}/api/v1/anuncios`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await res.json();

  return data;
};

export default LoadAnuncios;
