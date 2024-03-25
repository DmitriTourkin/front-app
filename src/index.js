import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth from './pages/Auth';
import './styles/df.css'
import SignUp from './pages/SignUp';
import SubsCreate from './pages/SubsCreate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SubsCreate/>
  </React.StrictMode>
);

