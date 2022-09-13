import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import { Props } from '@/@types/issue';

const IssueStateContext = createContext({} as any);

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issueData, setIssueData] = useState([]);

  const getIssueData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_HOST}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      });
      setIssueData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(issueData);

  useEffect(() => {
    getIssueData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <IssueStateContext.Provider value={issueData}>{children}</IssueStateContext.Provider>;
};

export default IssueStateContext;
