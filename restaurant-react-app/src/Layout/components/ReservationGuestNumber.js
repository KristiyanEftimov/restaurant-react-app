import React from "react";
import { Container } from "react-bootstrap";
import classes from "../css/ReservationGuestNumber.module.css";

export default function ReservationGuestNumber( {onClick, selectedButton} ) {
    return(
        <Container className={classes.guestNumberContainer}>
            <button onClick={() => onClick('1')} className={selectedButton === '1' ? 'selected' : ''}>1</button>
            <button onClick={() => onClick('2')} className={selectedButton === '2' ? 'selected' : ''}>2</button>
            <button onClick={() => onClick('3')} className={selectedButton === '3' ? 'selected' : ''}>3</button>
            <button onClick={() => onClick('4')} className={selectedButton === '4' ? 'selected' : ''}>4</button>
            <button onClick={() => onClick('5')} className={selectedButton === '5' ? 'selected' : ''}>5</button>
            <button onClick={() => onClick('6')} className={selectedButton === '6' ? 'selected' : ''}>6</button>
            <button onClick={() => onClick('7')} className={selectedButton === '7' ? 'selected' : ''}>7</button>
            <button onClick={() => onClick('8')} className={selectedButton === '8' ? 'selected' : ''}>8</button>
            <button onClick={() => onClick('9')} className={selectedButton === '9' ? 'selected' : ''}>9</button>
            <button onClick={() => onClick('10')} className={selectedButton === '10' ? 'selected' : ''}>10</button>
            <button onClick={() => onClick('11')} className={selectedButton === '11' ? 'selected' : ''}>11</button>
            <button onClick={() => onClick('12')} className={selectedButton === '12' ? 'selected' : ''}>12</button>
            <br/><br/>
            <button onClick={() => onClick('13')} className={selectedButton === '13' ? 'selected' : ''}>13</button>
            <button onClick={() => onClick('14')} className={selectedButton === '14' ? 'selected' : ''}>14</button>
            <button onClick={() => onClick('15')} className={selectedButton === '15' ? 'selected' : ''}>15</button>
            <button onClick={() => onClick('16')} className={selectedButton === '16' ? 'selected' : ''}>16</button>
            <button onClick={() => onClick('17')} className={selectedButton === '17' ? 'selected' : ''}>17</button>
            <button onClick={() => onClick('18')} className={selectedButton === '18' ? 'selected' : ''}>18</button>
            <button onClick={() => onClick('19')} className={selectedButton === '19' ? 'selected' : ''}>19</button>
            <button onClick={() => onClick('20')} className={selectedButton === '20' ? 'selected' : ''}>20</button>
            <button onClick={() => onClick('21')} className={selectedButton === '21' ? 'selected' : ''}>21</button>
            <button onClick={() => onClick('22')} className={selectedButton === '22' ? 'selected' : ''}>22</button>
            <button onClick={() => onClick('23')} className={selectedButton === '23' ? 'selected' : ''}>23</button>
            <button onClick={() => onClick('+')} className={selectedButton === '+' ? 'selected' : ''}>+</button>
        </Container>
    );
}