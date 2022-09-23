import { useState, useEffect } from "react";

const Fetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCount = new AbortController();
    // setTimeout(() => {
    fetch(url, {
      signal: abortCount.signal,
      //body: JSON.stringify(params),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Coluld not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch was aborted");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    // }, 500);
    return () => abortCount.abort();
  }, [url]);
  return { data, isLoading, error };

};

export default Fetch;
