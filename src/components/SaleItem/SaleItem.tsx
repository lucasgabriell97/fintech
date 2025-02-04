import React from "react";
import { ISale } from "../../context/DataContext";

type ISaleItem = {
  sale: ISale;
};

export const SaleItem: React.FC<ISaleItem> = ({ sale }) => {
  return (
    <div className="sale box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sale.id}
      </a>
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
