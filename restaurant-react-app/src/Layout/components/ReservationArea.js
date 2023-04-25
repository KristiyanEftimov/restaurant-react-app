import React from "react";
import "../css/ReservationForm.module.css";
import { Container } from "react-bootstrap";

export default function ReservationArea({ onChange, selectedArea }) {

  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  }

  return (
    <Container>
      <select name='areas' onChange={handleChange} value={selectedArea}>
        <option value="">Изберете зала</option>
        <option value="градина">Градина</option>
        <option value="непушачи">Зала за непушачи</option>
        <option value="пушачи">Зала за пушачи</option>
      </select>
    </Container>
  );
}