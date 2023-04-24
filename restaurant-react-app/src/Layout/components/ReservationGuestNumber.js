import React from "react";
import { Container } from "react-bootstrap";
import classes from "../css/ReservationGuestNumber.module.css";

export default function ReservationGuestNumber( {onClick, selectedGuestNumber} ) {
    return(
        <Container className={classes.guestNumberContainer}>
            <button onClick={() => onClick('1')} className={selectedGuestNumber === '1' ? classes.selected : ''}>1</button>
            <button onClick={() => onClick('2')} className={selectedGuestNumber === '2' ? classes.selected : ''}>2</button>
            <button onClick={() => onClick('3')} className={selectedGuestNumber === '3' ? classes.selected : ''}>3</button>
            <button onClick={() => onClick('4')} className={selectedGuestNumber === '4' ? classes.selected : ''}>4</button>
            <button onClick={() => onClick('5')} className={selectedGuestNumber === '5' ? classes.selected : ''}>5</button>
            <button onClick={() => onClick('6')} className={selectedGuestNumber === '6' ? classes.selected : ''}>6</button>
            <button onClick={() => onClick('7')} className={selectedGuestNumber === '7' ? classes.selected : ''}>7</button>
            <button onClick={() => onClick('8')} className={selectedGuestNumber === '8' ? classes.selected : ''}>8</button>
            <button onClick={() => onClick('9')} className={selectedGuestNumber === '9' ? classes.selected : ''}>9</button>
            <button onClick={() => onClick('10')} className={selectedGuestNumber === '10' ? classes.selected : ''}>10</button>
            <button onClick={() => onClick('11')} className={selectedGuestNumber === '11' ? classes.selected : ''}>11</button>
            <button onClick={() => onClick('12')} className={selectedGuestNumber === '12' ? classes.selected : ''}>12</button>
            <br/><br/>
            <button onClick={() => onClick('13')} className={selectedGuestNumber === '13' ? classes.selected : ''}>13</button>
            <button onClick={() => onClick('14')} className={selectedGuestNumber === '14' ? classes.selected : ''}>14</button>
            <button onClick={() => onClick('15')} className={selectedGuestNumber === '15' ? classes.selected : ''}>15</button>
            <button onClick={() => onClick('16')} className={selectedGuestNumber === '16' ? classes.selected : ''}>16</button>
            <button onClick={() => onClick('17')} className={selectedGuestNumber === '17' ? classes.selected : ''}>17</button>
            <button onClick={() => onClick('18')} className={selectedGuestNumber === '18' ? classes.selected : ''}>18</button>
            <button onClick={() => onClick('19')} className={selectedGuestNumber === '19' ? classes.selected : ''}>19</button>
            <button onClick={() => onClick('20')} className={selectedGuestNumber === '20' ? classes.selected : ''}>20</button>
            <button onClick={() => onClick('21')} className={selectedGuestNumber === '21' ? classes.selected : ''}>21</button>
            <button onClick={() => onClick('22')} className={selectedGuestNumber === '22' ? classes.selected : ''}>22</button>
            <button onClick={() => onClick('23')} className={selectedGuestNumber === '23' ? classes.selected : ''}>23</button>
            <button onClick={() => onClick('+')} className={selectedGuestNumber === '+' ? classes.selected : ''}>+</button>
        </Container>
    );
}