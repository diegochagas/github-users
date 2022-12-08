import React from "react";
import { BrowserRouter, Route, Navigate, Routes  } from 'react-router-dom';

import Search from './pages/Search';
import User from './pages/User';
import Header from "./components/Header";

import GlobalStyle from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />

          <Route path="/search" element={<Search />} />
          <Route path="/user/:login" element={<User />} />

          <Route path="*" element={<Navigate replace to="/search" />} />
        </Routes>

        <GlobalStyle />
      </main>
    </BrowserRouter>
  );
}

export default App;