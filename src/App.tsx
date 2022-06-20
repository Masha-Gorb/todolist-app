import React from 'react';
import {Header} from "./components/Header/Header";
import {GreetingPage} from "./components/GreetingPage/GreetingPage";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {Route, Routes, Link} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

export const App = () => {
  return (
        <div>
          <Header/>
          <Link to="/greetings">--Start Page--</Link>
          <Link to="/login">Login Page--</Link>
          <Link to="/main">Main Page</Link>
          <Routes>
            <Route path="/greetings" element={
              <GreetingPage/>
            }>
            </Route>
            <Route path="/login" element={
              <LoginPage/>
            }>
            </Route>
            <Route path="/main" element={
              <MainPage/>
            }>
            </Route>

          </Routes>
        </div>


  )
}