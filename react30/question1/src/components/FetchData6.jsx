import React, { useEffect, useState } from "react";

const FetchData6 = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/5")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return <div>Title:{data ? <h1>{data.title}</h1> : <p>loading</p>}</div>;
};

export default FetchData6;
