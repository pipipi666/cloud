import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { ROUTES } from "./utils/consts/routes";
import { FormPage } from "./pages/form/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.FORM} element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

