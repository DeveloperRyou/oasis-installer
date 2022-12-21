import React from 'react';
import ReactDOM from 'react-dom/client';
import '@scss/default.scss';
import './fonts/fonts.scss';
import {HashRouter, Route, Routes } from 'react-router-dom';
import Update from './Update';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/update" element={<Update/>} />
    </Routes>
  </HashRouter>
);
