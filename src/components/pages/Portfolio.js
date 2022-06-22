import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import classes from '../../styles/Portfolio.module.css';

// Canvas logo image source: https://www.pinclipart.com/pindetail/ibJJhox_canvas-logo-transparent-background-clipart/

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Portfolio</title>
      </Helmet>
      <Container className={classes.Container}>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <div>
                <h1 className={classes.PageTitle}>Portfolio</h1>
                {/* <h5 style={{ fontWeight: '400' }} class='animated zoomIn'>
                  eLearning &bull; Instructor-Led Training
                </h5> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
