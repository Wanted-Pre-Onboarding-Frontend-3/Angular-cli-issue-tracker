import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
