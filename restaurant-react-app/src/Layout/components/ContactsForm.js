import { Form, Button,Row,Col } from 'react-bootstrap';
import classes from '../css/ContactsForm.module.css';

export default function ContactsForm() {
    return (
        <Form className={classes.Form}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Име *"  required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicLastName">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Фамилия *" required />
              </Form.Group>
            </Col>
          </Row>
    
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Email *" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPhone">
                <Form.Label></Form.Label>
                <Form.Control type="tel" placeholder="Телефон *" required />
              </Form.Group>
            </Col>
          </Row>
    
          <Form.Group controlId="formBasicComments">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Въведете вашите въпроси или коментари" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Изпрати
          </Button>
        </Form>
      );
}
