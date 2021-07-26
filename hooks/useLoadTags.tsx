const LoadTags = async () => {
  const url = "http://127.0.0.1:8000/api/v1/tags";
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
