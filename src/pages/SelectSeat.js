import React, { useState } from "react";
import Seatsvg from "../components/seat";

const SelectSeat = () => {
  const [seatsSelected, setSeatsSelected] = useState(0);
  const [seatNumber, setSeatNumber] = useState([]);

  return (
    <div className="">
      <div className="divider" />
      <div className="flex justify-between px-5">
        <p>
          <b>No.of Seats:</b> {seatsSelected}
        </p>
        <h1 className="font-bold">Pelicula IMAX</h1>
        <p>
          <b>Date:</b> {new Date().toLocaleString().split(",")[0]}{" "}
        </p>
      </div>
      <div className="flex justify-between px-5">
        <p>
          <b>Seats:</b> {seatNumber.toString()}
        </p>
        <p>
          <b>Price:</b> {new Date().toLocaleString().split(",")[0]}{" "}
        </p>
      </div>
      <div className="divider" />
      <div className="seats flex flex-col items-center justify-center">
        <div className="flex">
          {[...Array(18)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="A"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(15)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="B"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(10)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="C"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(12)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="D"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(10)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="F"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(8)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="G"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(14)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="H"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(16)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="I"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
        <div className="flex">
          {[...Array(18)].map((e, i) => (
            <span className="busterCards" key={i}>
              <Seatsvg
                selected={setSeatsSelected}
                selectSeat={seatsSelected}
                row="J"
                number={i + 1}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectSeat;
