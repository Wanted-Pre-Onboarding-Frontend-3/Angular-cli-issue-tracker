import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const IssueStateContext = createContext({} as any);

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issueData, setIssueData] = useState([]);

  const getIssueData = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_HOST}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      });
      setIssueData(response.data);
      console.log(issueData);
    } catch (err) {
      console.log(err);
    }
  }, [issueData]);

  useEffect(() => {
    getIssueData();
  }, []);

  return <IssueStateContext.Provider value={issueData}>{children}</IssueStateContext.Provider>;
};
