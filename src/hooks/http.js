import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("Sending http request");
    axios.get(url).then((res) => {
      setIsLoading(false);
      setFetchedData(res);
    });
  }, [url]);

  return [isLoading, fetchedData];
};
