import React from "react";
import { Container } from "react-bootstrap";
import classes from "../css/ReservationGuestNumber.module.css";

export default function ReservationGuestNumber( {onClick, selectedGuestNumber} ) {
  const buttonRows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23+'],
  ];

  return (
    <Container className={classes.guestNumberContainer}>
      {buttonRows.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((number) => (
            <button
              key={number}
              onClick={() => onClick(number)}
              className={selectedGuestNumber === number ? classes.selected : ''}
            >
              {number}
            </button>
          ))}
        </div>
      ))}
      <p><br/>* При избор на 23+ гости уточнете точната бройка в полето за коментар в последната стъпка на формата!</p>
    </Container>
  );
}