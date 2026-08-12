import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage";
import { LoginPage } from "./components/Pages/LoginPage";
import { DemoPage } from "./components/Pages/DemoPage";
import { ErrorPage } from "./components/Pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/loginpage" element={<LoginPage />} />
      <Route exact path="/demopage" element={<DemoPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
