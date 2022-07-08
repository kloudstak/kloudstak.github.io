import React from 'react';
import Pages from './views/pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
    </Router>

  );
}

export default App;
