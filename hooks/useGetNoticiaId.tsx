const getNoticiaId = async (id) => {
  const url = "http://127.0.0.1:8000/api/v1/noticias/" + id;
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

export default getNoticiaId;
