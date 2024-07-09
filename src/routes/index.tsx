

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Login } from '../pages/Login';
import { Contact } from '../pages/Contact';
import { Details } from '../pages/Details';
import { Basket } from '../pages/Basket';


const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  )
}

export default Rotas