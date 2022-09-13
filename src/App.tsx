import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from './pages/detail/Detail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/issue/:issueNumber" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
