import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/home/Home';

import Detail from './pages/detail/Detail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue/:issueNumber" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
