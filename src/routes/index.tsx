

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Login } from '../pages/Login';
import { Contact } from '../pages/Contact';


const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default Rotas