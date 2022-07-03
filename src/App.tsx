import React from 'react';
import {Header} from "./components/Header/Header";
import {GreetingPage} from "./components/GreetingPage/GreetingPage";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import {TimerPage} from "./components/TimerPage/TimerPage";

export const App = () => {
  return (
        <div>
          <Header/>
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
            <Route path="/timer" element={
              <TimerPage/>
            }>
            </Route>

          </Routes>
        </div>


  )
}