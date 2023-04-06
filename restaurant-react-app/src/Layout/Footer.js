import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    
    <MDBFooter className='text-center text-white'   >
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='https://github.com/KristiyanEftimov/restaurant-react-app' target="_blank"
              role='button'
            >
              <MDBIcon fab className='fa-github' />
            </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{backgroundColor: 'rgba(195, 157, 99)'}}>
        © 2023 Copyright: The Hungry Bear
      </div>
    </MDBFooter>
  );
}