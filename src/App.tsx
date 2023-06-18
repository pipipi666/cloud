import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/main";
import { FormPage } from "./pages/form/form";
import { ROUTES } from "./utils";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.CREATE} element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

