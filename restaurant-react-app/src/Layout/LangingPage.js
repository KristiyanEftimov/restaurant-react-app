import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import classes from "./LandingPage.module.css";
import RestaurantVideo from './RestaurantVideo.mp4';

export default function LandingPage() {
    return (
        <Container className={classes.landingpage}>
            <div className={classes.overlay}></div>
            <video className={classes.video} playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" loading="lazy">
                <source src={RestaurantVideo} type="video/mp4" />
            </video>
            <h2>Добре дошли в ресторант <br/> "The Hungry Bear"
            </h2>
        </Container>
    );
}