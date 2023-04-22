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
    const [selectedButton, setSelectedButton] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
    };

    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
    };

    const [personalInfoData, setPersonalInfoData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      });

    const FormTitles = ["Дата", "Брой хора", "Час", "Зала", "Лична информация"];

    const PageDisplay = () => {
        if (page === 0) {
            // return <ReservationCalendar formData={formData} setFormData={setFormData} />;
            return <ReservationCalendar onChange={ handleDateChange } />;
        } else if (page === 1) {
            return <ReservationGuestNumber onClick={ handleButtonClick } />;
        } else if (page === 2) {
            return <ReservationTime/>;
        } else if (page === 3) {
            // return <ReservationArea formData={formData} setFormData={setFormData} />;
            return <ReservationArea onChange={ handleAreaChange } />;
        } else {
            return <ReservationPersonalInfo personalInfoData={personalInfoData} setPersonalInfoData={setPersonalInfoData} />;
        }
    };

    return(
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
                        <p>{selectedButton}</p>
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: page === 2 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                        {/* <p>{selectedDate ? selectedDate.toLocaleDateString() : ''}</p> */}
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: page === 3 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-utensils"></i>
                    </div>
                    <div>
                        <p>{selectedArea ? selectedArea.toString() : ''}</p>
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: page === 4 ? "#C39D63" : ""}} className={classes.progresselement}>
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div>
                        {/* <p>{selectedDate ? selectedDate.toLocaleDateString() : ''}</p> */}
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
                    disabled={page == 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Prev
                </button>
                <button style={{marginRight: "0"}}
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("FORM SUBMITTED");
                            // console.log(formData);
                        } else {
                        setPage((currPage) => currPage + 1);
                        }
                    }}
                >
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </Container>
    );
}