import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import classes from "../css/AboutInfo.module.css";
import "../css/AboutInfo.module.css";
import RestaurantView from '../media/RestaurantView.jpg';

export default function AboutInfo() {
    return (
        <Container>
          <Row className={classes.aboutRow}>
            <Col className={classes.aboutRow}>
              <h3 className={classes.title}>The Hungry Bear</h3>
              <p>
                The Hungry Bear е уютен и приветлив ресторант, който сервира вкусни ястия за закуска, обяд и вечеря. Удобно разположен в морската градина, това е идеалното място за бързо хапване или за спокойно хранене с приятели и семейство. Нашето меню предлага разнообразие от ястия, подходящи за всички вкусове и хранителни предпочитания, от ситни закуски до свежи салати и вкусни бургери. Гордеем се с използването на местни продукти и приготвянето на ястията с внимание към детайлите. 
              </p>
              <p> Независимо дали търсите тихо място, за да се срещнете с приятел при кафе или жива атмосфера, за да се насладите на щастлив час с колеги, The Hungry Bear е на ваше разположение. Барът ни предлага избор от ръчно изработени бири, сигнатурни коктейли и изискани вина, които допълват вашето ястие. За специални случаи или групови събирания предлагаме частна зала за хранене, която може да приеме до 30 гости. С топлата и приветлива атмосфера това е идеалното място за рожден ден, семейно събиране или корпоративно събитие. </p>
            </Col>
            <Col className={classes.aboutcol}>
                <img className={classes.restaurantImage} src={RestaurantView} alt="Food"/>
            </Col>
          </Row>
        </Container>
      );
}