import React from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ISale } from "../../context/DataContext";
import { Loading } from "../../components/Loading/Loading";

type SaleWithoutDate = Omit<ISale, "data">;

export const Sale: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<SaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};
