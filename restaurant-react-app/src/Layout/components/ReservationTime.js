import React, { useState, useEffect } from "react";
import classes from "../css/ReservationTime.module.css";

const timeSlots = [
    { time: '08:00', discount: 0 },
    { time: '08:30', discount: 0 },
    { time: '09:00', discount: 0 },
    { time: '09:30', discount: 0 },
    { time: '10:00', discount: 15 },
    { time: '10:30', discount: 15 },
    { time: '11:00', discount: 15 },
    { time: '11:30', discount: 15 },
    { time: '12:00', discount: 10 },
    { time: '12:30', discount: 10 },
    { time: '13:00', discount: 10 },
    { time: '13:30', discount: 10 },
    { time: '14:00', discount: 15 },
    { time: '14:30', discount: 15 },
    { time: '15:00', discount: 15 },
    { time: '15:30', discount: 15 },
    { time: '16:00', discount: 10 },
    { time: '16:30', discount: 10 },
    { time: '17:00', discount: 10 },
    { time: '17:30', discount: 10 },
    { time: '18:00', discount: 0 },
    { time: '18:30', discount: 0 },
    { time: '19:00', discount: 0 },
    { time: '19:30', discount: 0 },
    { time: '20:00', discount: 0 },
    { time: '20:30', discount: 0 },
    { time: '21:00', discount: 0 },
    { time: '21:30', discount: 0 },
];

export default function ReservationTime( { onClick, selectedTime, selectedDate } ) {
    // return (
    //     <div className={classes.reservationTime}>
    //       <div className={classes.block}>
    //         {timeSlots.map((slot) => (
    //           <button
    //             key={slot.time}
    //             onClick={() => onClick(slot.time)}
    //             className={`${classes.slot} ${
    //               selectedTime === slot.time ? classes.selected : ""
    //             }`}
    //           >
    //             {slot.time}
    //             {slot.discount ? <br /> : null}
    //             {slot.discount ? `${slot.discount}% отстъпка` : null}
    //           </button>
    //         ))}
    //       </div>
    //     </div>
    //   );
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const currentDate = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.reservationTime}>
      <div className={classes.block}>
        {timeSlots.map((slot) => {
          const [slotHour, slotMinute] = slot.time.split(':').map(Number);
          const [currentHour, currentMinute] = currentTime.split(':').map(Number);
          const disabled = new Date(selectedDate).toDateString() === currentDate.toDateString() && 
                          (currentHour > slotHour || (currentHour === slotHour && currentMinute >= slotMinute));
          return (
            <button
              key={slot.time}
              onClick={() => onClick(slot.time)}
              className={`${classes.slot} ${selectedTime === slot.time ? classes.selected : ''}`}
              disabled={disabled}
            >
              {slot.time}
              {slot.discount ? <br /> : null}
              {slot.discount ? `${slot.discount}% отстъпка` : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
