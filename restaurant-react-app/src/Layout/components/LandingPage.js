import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import classes from "../css/LandingPage.module.css";
import RestaurantVideo from '../media/RestaurantVideo.mp4';
import { Zoom } from "react-awesome-reveal";

export default function LandingPage() {
    return (
        <Container className={classes.landingpage}>
            <div className={classes.overlay}></div>
            <video className={classes.video} playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" loading="lazy">
                <source src={RestaurantVideo} type="video/mp4" />
            </video>
            <Zoom className={classes.reactreveal} triggerOnce>
            <h2>
                Вкусна храна и уютна атмосфера <br/> <br/>
                <a className={classes.reservation} href='/reservation'>Резервация</a>
            </h2>
            </Zoom>
        </Container>
    );
}