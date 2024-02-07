import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
