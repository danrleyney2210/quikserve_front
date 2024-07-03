

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';


const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  )
}

export default Rotas