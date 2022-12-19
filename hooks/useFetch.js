import { useState } from "react";
import axios from "axios";

export default function useFetch(apiRoot) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [dataFromApi, setDataFromApi] = useState([]);

  async function fetchData() {
    try {
      const {data} = await axios.get(apiRoot);
      setDataFromApi(data);
      setLoading(false);
    } catch (error) {
        setError(error.message);
    }
  }

 

  return { data: dataFromApi, fetch: fetchData, loading, error };
}
