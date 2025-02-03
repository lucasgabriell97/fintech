import React from "react";
import { DateRange } from "../DateRange/DateRange";
import { Months } from "../../components/Months/Months";

export const Header: React.FC = () => {
  return (
    <div className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Months />
    </div>
  );
};
