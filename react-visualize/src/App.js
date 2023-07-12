import { CssBaseline, createTheme } from "@mui/material";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage";
import { DetailsPage } from "./pages/DetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { store } from "./store/Store";
import { observer } from "mobx-react-lite";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#15d198',
        disabled: '#969696',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#e8e8e8',
        paper: '#f9f9f9',
      },
      type: 'dark',
      divider: 'rgba(226,226,226,0.12)',
    },
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="details/:id" element={<DetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

const obsApp = observer(App)
export {obsApp as App};
