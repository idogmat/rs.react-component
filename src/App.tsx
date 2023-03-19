import { AboutAs } from "./components/AboutAs";
import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { Paths } from "./common";
import { Header } from "./components/Header/Header";
import { NotFound } from "./components/NotFound";
import { MainPage } from "./components/Main/MainPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path={Paths.CURRENT} element={<MainPage />} />
          <Route path={Paths.ABOUT} element={<AboutAs />} />
          <Route path={Paths.NOT_FOUND} element={<NotFound />} />
          <Route path={"/*"} element={<Navigate to={Paths.NOT_FOUND} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
