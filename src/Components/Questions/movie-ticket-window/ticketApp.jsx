import React, { useEffect, useState } from "react";
import Seats from "./data.js";
import "./ticket.css";
import DonePopup from "./donePopup.jsx";

function TicketApp() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [movieSeats, setMovieSeats] = useState(Seats);
  const [price, SetPrice] = useState(0);

  useEffect(() => {
    let amount = 0;
    bookedSeats.forEach((seatId) => {
      const row = seatId[0];
      if (row === "A" || row === "B" || row === "C") {
        amount += 150;
      } else if (row === "D" || row === "E" || row === "F") {
        amount += 250;
      } else if (row === "G" || row === "H") {
        amount += 350;
      }
    });
    SetPrice(amount);
  }, [bookedSeats]);

  const [showPopup, setShowPopup] = useState(false);

  const onHandelSubmit = () => {
    setShowPopup(true);
  };

  const handelClose = () => {
    setShowPopup(false);
    SetPrice(0);

    // Update category to 'selected' for booked seats
    setMovieSeats((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) =>
          bookedSeats.includes(`${seat.row}${seat.seat}`)
            ? { ...seat, categeory: "booked", isSelected: false }
            : seat
        )
      )
    );

    setBookedSeats([]);
  };

  const onHandelCLick = (seat, rowIndex) => {
    // Deep copy movieSeats to avoid mutating state
    const newSeats = movieSeats.map((row, i) =>
      row.map((s) => {
        if (
          i === rowIndex &&
          s.categeory === seat.categeory &&
          s.row === seat.row &&
          s.seat === seat.seat
        ) {
          return { ...s, isSelected: !s.isSelected };
        }
        return s;
      })
    );
    setMovieSeats(newSeats);

    const seatId = `${seat.row}${seat.seat}`;
    if (bookedSeats.includes(seatId)) {
      setBookedSeats(bookedSeats.filter((id) => id !== seatId));
    } else {
      setBookedSeats([...bookedSeats, seatId]);
    }
  };

  return (
    <div className="movieWindow">
      {movieSeats.map((e, index) => {
        return (
          <div className="seatRowMain" key={e[0].row}>
            <span>{e[0].row}</span>
            <div className="seatRow">
              {e.map((seat) => {
                return (
                  <div
                    key={seat.seat}
                    className={
                      seat.isSelected
                        ? `seats selected`
                        : `seats ${seat.categeory}`
                    }
                    onClick={
                      seat.categeory === "booked"
                        ? ""
                        : () => onHandelCLick(seat, index)
                    }
                  >
                    {seat.seat}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <button onClick={onHandelSubmit}>Submit</button>
      <div>
        <span>Booking Seats:</span>
        <div>
          {bookedSeats.map((e) => {
            return <span key={e}>{e} </span>;
          })}
        </div>
        <span>Amount: {price}</span>
      </div>

      {showPopup && <DonePopup onClose={handelClose} />}
    </div>
  );
}

export default TicketApp;
