import { useCallback, useEffect, useState } from "react";
import { HttpClient } from "../types/http";

type UseFetchProps = {
  httpClient: HttpClient;
  url: string;
};

const useFetch = (props: UseFetchProps) => {
  const { httpClient, url } = props;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await httpClient.request({ method: "get", url });

      setData(response.body);
    } catch (err) {
      const error = (err as Error).message;
      setError(error);
      console.log("useFetch Error: ", (err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetch;
