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
      <Routes>
        <ThemeProvider theme={theme}>
          <Route path="/" element={<PageHome />} />
        </ThemeProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
