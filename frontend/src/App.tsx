import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import { Dashboard } from "./pages/Welcome/Dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/transactions" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
