import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IssueProvider, useApiDispatch } from '@/store/provider';
import { getIssueData } from '@/store/reducer';

const App = () => {
  const dispatch = useApiDispatch();

  useEffect(() => {
    getIssueData(dispatch);
  }, [dispatch]);

  return (
    <IssueProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>home</div>} />
        </Routes>
      </BrowserRouter>
    </IssueProvider>
  );
};

export default App;
