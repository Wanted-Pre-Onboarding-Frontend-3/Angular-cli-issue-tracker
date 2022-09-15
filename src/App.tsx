import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from '@/pages/detail/Detail';
import Home from '@/pages/home/Home';
import { IssueProvider } from '@/store/api-context';

import NotFound from './components/NotFound';

const App = () => {
  return (
    <IssueProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue/:issueNumber" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </IssueProvider>
  );
};

export default App;
