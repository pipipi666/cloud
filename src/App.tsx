import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { FormPage } from "./pages/form/form";
import { ROUTES } from "./utils/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CREATE} element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

