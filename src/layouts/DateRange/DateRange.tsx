import React from "react";
import { DateInput } from "../../components/DateInput/DateInput";
import { useData } from "../../context/DataContext";

export const DateRange: React.FC = () => {
  const { start, setStart, end, setEnd } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault}>
      <DateInput
        label="Início"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="Final"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  );
};
