import React from "react";
import { useData } from "../../context/DataContext";

export const Header: React.FC = () => {
  const { data } = useData();
  console.log(data)
  return <div>Header</div>;
};
