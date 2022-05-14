import React, { useState } from "react";

const Seatsvg = ({
  selected,
  selectSeat,
  seatNumber,
  setSeatNumber,
  row,
  number,
}) => {
  const [select, setSelect] = useState(false);

  return (
    <svg
      onClick={() => {
        select ? setSelect(false) : setSelect(true);
        select ? selected(selectSeat - 1) : selected(selectSeat + 1);
        !select
          ? setSeatNumber([...seatNumber, row + number])
          : setSeatNumber([
              ...seatNumber.slice(0, seatNumber.indexOf(row + number)),
              ...seatNumber.slice(seatNumber.indexOf(row + number) + 1, 0),
            ]);
        console.log(seatNumber);
      }}
      stroke="currentColor"
      fill={select ? "#1eb854" : "white"}
      stroke-width="0"
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path>
    </svg>
  );
};

export default Seatsvg;
