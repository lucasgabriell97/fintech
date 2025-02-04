import React from "react";
import "./css/style.css";

import { DataContextProvider } from "./context/DataContext";

import { Sidenav } from "./layouts/Sidenav/Sidenav";
import { Header } from "./layouts/Header/Header";

import { Summary } from "./pages/Summary/Summary";
import { Sales } from "./pages/Sales/Sales";


export const App: React.FC = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
};
