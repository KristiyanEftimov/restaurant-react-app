import React from "react";
import "../css/ReservationForm.module.css";
import { Container } from "react-bootstrap";

export default function ReservationArea({ onChange, selectedArea }) {

    return(
        <Container>
            <select name='areas' onChange ={ onChange } value={ selectedArea }>
                {/* <option value="" selected={selectedArea === ""} disabled hidden>Изберете зала</option>
                <option value="градина" selected={selectedArea === "градина"}>Градина</option>
                <option value="непушачи" selected={selectedArea === "непушачи"}>Зала за непушачи</option>
                <option value="пушачи" selected={selectedArea === "пушачи"}>Зала за пушачи</option> */}
                <option value="" selected disabled hidden>Изберете зала</option>
                <option value="градина">Градина</option>
                <option value="непушачи">Зала за непушачи</option>
                <option value="пушачи">Зала за пушачи</option>
            </select>
        </Container>
    );
}