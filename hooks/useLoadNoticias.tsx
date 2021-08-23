import { host } from "../public/js/host";

const LoadNoticias = async (area = "", tag = "", page) => {
  const url = `${host}/api/v1/noticias?area=${area}&tag=${tag}&page=${page}`;
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
