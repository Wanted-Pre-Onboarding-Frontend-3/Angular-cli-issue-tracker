import axios, { AxiosRequestConfig } from 'axios';
import { createContext, useEffect, useState } from 'react';

import { IIssue, IssueContextType, Props } from '@/types';

const IssueStateContext = createContext({} as IssueContextType);

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issueData, setIssueData] = useState<IIssue[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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

  const getIssueApi = (config?: AxiosRequestConfig): Promise<any> =>
    axiosInstance.get(`${BASE_URL}`, { params: { sort: 'comments' } }).then((response) => response.data);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getIssueApi();
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
    <IssueStateContext.Provider value={{ getIssueApi, issueData, setIssueData, error, isLoading }}>
      {children}
    </IssueStateContext.Provider>
  );
};

export default IssueStateContext;
