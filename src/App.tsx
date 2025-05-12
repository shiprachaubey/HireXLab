import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
          <Route path="/apply-form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
