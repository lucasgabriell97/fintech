import React from "react";
import { ISale } from "../../context/DataContext";
import { NavLink } from "react-router";

type ISaleItem = {
  sale: ISale;
};

export const SaleItem: React.FC<ISaleItem> = ({ sale }) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};
