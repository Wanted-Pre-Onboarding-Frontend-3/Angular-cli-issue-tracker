import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IssueProvider } from '@/store/api-context';

const App = () => {
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
