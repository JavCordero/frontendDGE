import { host } from "../public/js/host";
const LoadTags = async () => {
  const url = host + "/api/v1/tags";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await res.json();

  const newData = [];
  data.map((item) => {
    newData.push({ value: item.id, label: item.name });
  });

  return newData;
};

export default LoadTags;
