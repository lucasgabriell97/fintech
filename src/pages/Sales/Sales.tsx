import React from "react";
import { useData } from "../../context/DataContext";
import { SaleItem } from "../../components/SaleItem/SaleItem";

export const Sales: React.FC = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};
