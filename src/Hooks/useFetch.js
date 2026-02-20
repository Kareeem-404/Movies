import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(api) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(api);
      setData(res.data || []);
    };

    fetchData();
  }, [api]);

  return data;
}