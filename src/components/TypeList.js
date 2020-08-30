import React from "react";
import { useHttp } from "../hooks/http";
import "./TypeList.css";

const TypeList = () => {
  const [isLoading, fetchedData] = useHttp(
    "https://pokeapi.co/api/v2/type",
    []
  );

  const types = fetchedData ? fetchedData.data.results : null;

  let content = "Loading...";

  if (!isLoading && types !== null) {
    content = (
      <div className="container">
        {" "}
        {types.map((type) => (
          <a href={type.url} key={type.url}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </a>
        ))}
      </div>
    );
  }

  return content;
};

export default TypeList;
