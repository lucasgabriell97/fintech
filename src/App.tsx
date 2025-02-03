import React from "react";
import "./Style.css";

import { Sidenav } from "./layouts/Sidenav/Sidenav";
import { Header } from "./layouts/Header/Header";

import { Resumo } from "./pages/Resumo/Resumo";

import { DataContextProvider } from "./context/DataContext";

export const App: React.FC = () => {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
};
