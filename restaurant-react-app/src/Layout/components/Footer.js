import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/all.min.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
        <a href='https://github.com/KristiyanEftimov/restaurant-react-app' target="blank" className='me-4 text-reset'>
            <MDBIcon fab icon="github" size="2x" />
        </a>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{backgroundColor: 'rgba(195, 157, 99)'}}>
        © 2023 Copyright: The Hungry Bear
      </div>
    </MDBFooter>
  );
}