import React from "react";
import "./css/style.css";

import { BrowserRouter, Route, Routes } from "react-router";
import { DataContextProvider } from "./context/DataContext";

import { Sidenav } from "./layouts/Sidenav/Sidenav";
import { Header } from "./layouts/Header/Header";

import { Summary } from "./pages/Summary/Summary";
import { Sales } from "./pages/Sales/Sales";
import { Sale } from "./pages/Sale/Sale";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};
