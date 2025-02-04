import React from "react";
import { DateRange } from "../DateRange/DateRange";
import { Months } from "../../components/Months/Months";
import { useLocation } from "react-router";

export const Header: React.FC = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo"
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas"
    }
  }, [location]);

  return (
    <div className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </div>
  );
};
