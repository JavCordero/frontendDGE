const Logout = async () => {
  const url = "http://127.0.0.1:8000/api/v1/logout";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export default Logout;
