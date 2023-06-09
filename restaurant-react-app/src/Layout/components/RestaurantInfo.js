import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import classes from "../css/RestaurantInfo.module.css";
import RestaurantFood from '../media/RestaurantFood.jpg';
import RestaurantView from '../media/RestaurantView.jpg';
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { Reveal } from 'react-awesome-reveal';
import ScrollToTop from "react-scroll-to-top";
import Persona1 from "../media/persona1.png";
import Persona2 from "../media/persona2.png";
import Persona3 from "../media/persona3.png";

export default function RestaurantInfo() {
    return (
        <Container>
            <ScrollToTop smooth color="white" style={{backgroundColor: "#C39D63"}}/>
            <Reveal triggerOnce>
            <Row className={classes.row}>
                <Col>
                    <h3>Нашата мисия</h3>
                    <p className={classes.justify}> &emsp;Нашата мисия е да предоставяме на клиентите най-доброто възможно обслужване и продукти в нашия бранш. Ние стремим да създадем удобна и приятна среда за нашите клиенти, която им позволява да се насладят на нашите услуги и да се върнат отново.<br/><br/>

                    &emsp;Ние насърчаваме иновации и творчески подход към работата, като търсим постоянно начини да подобрим нашите услуги и да осигурим максимално удовлетворение на клиентите. Всеки от нашите служители е ангажиран с нашата мисия и работи усърдно, за да я изпълни във всичко, което прави.</p>
                    <br/>
                    <a className={classes.button} href="/about">За нас</a>
                </Col>
                <Col><img className={classes.restaurantImage} src={RestaurantView} alt="Food"/></Col>
            </Row>
            </Reveal>
            <Fade direction="right" triggerOnce>
            <Row className={classes.row}>
                <Col><img className={classes.restaurantImage} src={RestaurantFood} alt="Food"/></Col>
                <Col>
                    <h3>Различни вкусове всеки ден  </h3>
                    <p className={classes.justify}> &emsp; Нашето меню е пълно с изкусителни ястия и напитки, които ще задоволят всеки вкус. Започнете с нашите свежи предястия и продължете с основните ястия, приготвени от висококачествени съставки. Открийте разнообразието от вкусове с нашите специалитети на грил, сезонни ястия и регионални деликатеси. Завършете своята хранителна приказка с невероятните ни десерти, като макарони, тирамису и шоколадови изкушения. Съчетайте вашите ястия с богатия ни избор от вина и други напитки.</p>
                    <br/>
                    <a className={classes.button} href="/menu">Меню</a>
                </Col>
            </Row>
            </Fade>
            <Fade direction="down" triggerOnce>
            <Row className={classes.row}>
                <Col>
                    <br/> <br/>
                    <h3>Как да ни намерите</h3>
                    <p className={classes.justify}> &emsp; За да ни намерите, можете да използвате нашата адресна локация, която може да бъде намерена на нашия уебсайт. Можете да се свържете с нас и по телефона или чрез имейл, където ще получите подробна информация за начина на намиране на нашия ресторант. Ние винаги сме готови да отговорим на ваши въпроси и да ви помогнем да ни намерите без затруднения. Очакваме с нетърпение да ви посрещнем в нашия ресторант!</p>
                    <br/>
                    <a className={classes.button} href="/contacts">Контакти</a>
                </Col>
                <Col>
                    <br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2907.8974655930524!2d27.93605231475953!3d43.211639888890126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDEyJzQxLjkiTiAyN8KwNTYnMTcuNyJF!5e0!3m2!1sbg!2sbg!4v1680806841288!5m2!1sbg!2sbg" title='location' width="500" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
            </Fade>
            <Zoom triggerOnce>
            <Row className={classes.row}>
                <Col><p className={classes.reviews}>ОТЗИВИ</p> <hr/></Col>
            </Row>
            <Row className={classes.opinions}>
                <Col>
                    <img className={classes.persona} src={Persona1} alt="Persona1"/><br/>
                    <h4>“Вкусна храна и прекрасни хора”</h4>
                    <p>Имах невероятно преживяване в този ресторант. Храната беше изключително вкусна, обстановката беше приятна и обслужването беше на ниво. Препоръчвам горещо на всеки да посети това място.</p>
                    <p className={classes.personaName}>Антоанета Димитрова</p>
                    <span className={classes.stars}>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                    </span>
                </Col>
                <Col>
                <img className={classes.persona} src={Persona2} alt="Persona2"/><br/>
                    <h4>“Качество на храна и обслужване”</h4>
                    <p>Ресторантът предлага богато разнообразие от ястия и напитки, които са приготвени внимателно и вкусно. Обслужването е превъзходно и персоналът е много гостоприемен и услужлив.</p>
                    <p className={classes.personaName}>Любомир Георгиев</p>
                    <span className={classes.stars}>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                    </span>
                    <span className={classes.emptystar}>
                        <i class="fa-solid fa-star" ></i>
                    </span>
                </Col>
                <Col>
                <img className={classes.persona} src={Persona3} alt="Persona3"/><br/>
                    <h4>“Идеално място за посещение”</h4>
                    <p>Това е мястото, където бих се върнал отново и отново! Храната е невероятно вкусна, обслужването е на ниво, а атмосферата е уютна и приятна. Нямам никакви забележки и го препоръчвам на всички.</p>
                    <p className={classes.personaName}>Стоян Колев</p>
                    <span className={classes.stars}>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                        <i class="fa-solid fa-star" ></i>
                    </span>
                </Col>
            </Row>
            
            </Zoom>
        </Container>
    );
}