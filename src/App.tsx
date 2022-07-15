import React from 'react';
import {Header} from "./components/Header/Header";
import {GreetingPage} from "./components/GreetingPage/GreetingPage";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import {TimerPage} from "./components/TimerPage/TimerPage";
import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import {useSelector} from "react-redux";
import {MainPageRootStateType} from "./BLL/store";
import {RequestStatusType} from "./BLL/main-reducer";

export const App = () => {
  const status = useSelector<MainPageRootStateType, RequestStatusType>(state => state.main.status )

  return (
        <div>
          <Header/>
          {status === 'loading' &&   <LinearProgress color="secondary" />}
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