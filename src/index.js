import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrowsePodc from './pages/BrowsePodc';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Login" element={<Login />} />
        <Route path="BrowsePodc" element={<BrowsePodc />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
