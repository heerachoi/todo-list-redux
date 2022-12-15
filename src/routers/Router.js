import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
