import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import { IssueContextType, Props } from '@/@types/issue';

const IssueStateContext = createContext({} as IssueContextType);

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issueData, setIssueData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getIssueData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_HOST}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      });
      setIssueData(response.data);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setIsLoading(false);
  };
  console.log(issueData);

  useEffect(() => {
    getIssueData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <IssueStateContext.Provider value={{ issueData, error, isLoading }}>{children}</IssueStateContext.Provider>;
};

export default IssueStateContext;
