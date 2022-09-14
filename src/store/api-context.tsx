import axios, { AxiosRequestConfig } from 'axios';
import { createContext, useEffect, useState } from 'react';

import { IssueContextType, Props } from '@/types';

const IssueStateContext = createContext({} as IssueContextType);

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issueData, setIssueData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const BASE_URL = process.env.REACT_APP_API_HOST;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
    paramsSerializer: (params) => {
      return new URLSearchParams(params).toString();
    },
  });

  const api = {
    getIssueApi: (config?: AxiosRequestConfig) =>
      axiosInstance.get(`${BASE_URL}`, config).then((response) => response.data),
    getIssueDetailApi: (issueNumber: number) =>
      axiosInstance.get(`${BASE_URL}/${issueNumber}`).then((response) => response.data),
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await api.getIssueApi();
        setIssueData(response);
      } catch (err) {
        setError(true);
        console.error(err);
      }
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IssueStateContext.Provider value={{ api, issueData, error, isLoading }}>{children}</IssueStateContext.Provider>
  );
};

export default IssueStateContext;
