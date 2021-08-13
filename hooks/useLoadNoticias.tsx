import { host } from "../public/js/host";

const LoadNoticias = async (area = "", tag = "") => {
  const url = `${host}/api/v1/noticias?area=${area}&tag=${tag}`;
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

export default LoadNoticias;
