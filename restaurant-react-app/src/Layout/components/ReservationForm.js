import React, { useState } from "react";
import classes from "../css/ReservationForm.module.css";
import ReservationCalendar from "./ReservationCalendar";
import ReservationGuestNumber from "./ReservationGuestNumber";
import ReservationTime from "./ReservationTime";
import ReservationArea from "./ReservationArea";
import ReservationPersonalInfo from "./ReservationPersonalInfo";
import { Container } from "react-bootstrap";

export default function ReservationForm() {
    const [page, setPage] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedGuestNumber, setSelectedGuestNumber] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };
    
    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
    };

    const handleGuestNumberButtonClick = (buttonValue) => {
        setSelectedGuestNumber(buttonValue);
    };

    const handleTimeButtonClick = (buttonValue) => {
        setSelectedTime(buttonValue);
    };

    const [personalInfoData, setPersonalInfoData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        comment: ""
      });

    const FormTitles = ["Дата", "Брой хора", "Час", "Зала", "Лична информация"];

    const PageDisplay = () => {
        if (page === 0) {
            return <ReservationCalendar onChange={ handleDateChange }  selectedDate={selectedDate}/>;
        } else if (page === 1) {
            return <ReservationGuestNumber onClick={ handleGuestNumberButtonClick } selectedGuestNumber={selectedGuestNumber}/>;
        } else if (page === 2) {
            return <ReservationTime onClick={ handleTimeButtonClick } selectedTime={selectedTime} selectedDate={selectedDate}/>;
        } else if (page === 3) {
            return <ReservationArea onChange={ handleAreaChange } selectedArea={selectedArea} />;
        } else {
            return <ReservationPersonalInfo personalInfoData={personalInfoData} setPersonalInfoData={setPersonalInfoData} />;
        }
    };

    return (
        <Container className={classes.form}>
            <h1>Резервация</h1>
            <div className={classes.progressbar}>
                <div>
                    <div style={{backgroundColor: page === 0 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <div>
                        <p>{selectedDate ? selectedDate.toLocaleDateString() : ''}</p>
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: page === 1 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-person"></i>
                    </div>
                    <div>
                        <p>{selectedGuestNumber}</p>
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: page === 2 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                    <p>{selectedTime}</p>
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: page === 3 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-utensils"></i>
                    </div>
                    <div>
                        <p>{selectedArea}</p>
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: page === 4 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>
            </div>
            <div className={classes.formcontainer}>
                <div className={classes.formheader}>
                    <p class={classes.steptitle}>{FormTitles[page]}</p>
                </div>
                <div className="body">{PageDisplay()}</div>
            </div>
            <div className={classes.formfooter}>
                <button className={classes.button}
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Назад
                </button>
                <button style={{marginRight: "0"}}
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("Резервацията е успешна!");
                        } else {
                            if((page === 0 && selectedDate != null) ||
                              (page === 1 && selectedGuestNumber != null) || 
                              (page === 2 && selectedTime != null) ||
                              (page === 3 && selectedArea !== "")) {
                                setPage((currPage) => currPage + 1);
                            } else  {
                                alert("Попълнете полето")
                            }
                            
                        }
                    }}
                >
                    {page === FormTitles.length - 1 ? "Резервирай" : "Напред"}
                </button>
            </div>
        </Container>
    );
}