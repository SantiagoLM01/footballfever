import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (id: string | undefined) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post(`https://footballfeverapi.herokuapp.com/api/getDatos`, { url: `https://api.football-data.org/v4/competitions/${id}/teams` })
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    data,
    error,
    loading,
  };
};

export default useAxios;
