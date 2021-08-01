import { host } from "../public/js/host";
const Logout = async () => {
  const url = host + "/api/v1/logout";
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
