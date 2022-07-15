import React from 'react';
import {Header} from "./components/Header/Header";
import {GreetingPage} from "./components/GreetingPage/GreetingPage";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {Link, Route, Routes} from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import {TimerPage} from "./components/TimerPage/TimerPage";
import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import {useSelector} from "react-redux";
import {MainPageRootStateType} from "./BLL/store";
import {RequestStatusType} from "./BLL/main-reducer";
import s from "./components/Header/Header.module.css";
import Button from "@mui/material/Button/Button";

export const App = () => {
  const status = useSelector<MainPageRootStateType, RequestStatusType>(state => state.main.status )

  return (
        <div>
          <Header/>
          {status === 'loading' &&   <LinearProgress color="secondary" />}
          <Routes>
            <Route path="/" element={
              <GreetingPage/>
            }>
            </Route>
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
            <Route path="/404" element={<div>
              <h1>404: PAGE NOT FOUND</h1>
              <Button
                variant={'contained'}
                color={'secondary'}>
                <Link className={s.headerText} to="/greetings">Back to greetings</Link>
              </Button>
            </div>}/>
            <Route path="*" element={ <Navigate to={'/404'}/>}/>
          </Routes>
        </div>

  )
}