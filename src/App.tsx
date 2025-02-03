import React from "react";
import "./css/style.css";

import { Sidenav } from "./layouts/Sidenav/Sidenav";
import { Header } from "./layouts/Header/Header";

import { Summary } from "./pages/Summary/Summary";

import { DataContextProvider } from "./context/DataContext";

export const App: React.FC = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  );
};
