import { host } from "../public/js/host";
const LoadEventos = async (area = "", tag = "", page) => {
  const url = `${host}/api/v1/eventos?area=${area}&tag=${tag}&paginate=true&page=${page}`;
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

export default LoadEventos;
