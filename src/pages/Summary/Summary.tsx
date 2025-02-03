import React from "react";
import { useData } from "../../context/DataContext";

export const Summary: React.FC = () => {
  const { data } = useData();

  if(data === null) return null;
  return <section>Resumo</section>;
};
