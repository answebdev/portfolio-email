import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
                <h5 style={{ fontWeight: '400' }} class='animated zoomIn'>
                  SAMPLES OF MY WORK
                </h5>
              </div>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={12}>
              <div className={classes.CardContainer}>
                <div className={classes.CardDiv}>
                  <Card className={classes.CardWidth}>
                    <Card.Img
                      variant='top'
                      src='https://images.pexels.com/photos/1114376/pexels-photo-1114376.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>

                <div className={classes.CardDiv}>
                  <Card className={classes.CardWidth}>
                    <Card.Img
                      variant='top'
                      src='https://images.pexels.com/photos/1086711/pexels-photo-1086711.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>

                <div className={classes.CardDiv}>
                  <Card className={classes.CardWidth}>
                    <Card.Img
                      variant='top'
                      src='https://images.pexels.com/photos/1031700/pexels-photo-1031700.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className={classes.CardContainer}>
                <div className={classes.CardDiv}>
                  <Card className={classes.CardWidth}>
                    <Card.Img
                      variant='top'
                      src='https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>

                <div className={classes.CardDiv}>
                  <Card className={classes.CardWidth}>
                    <Card.Img
                      variant='top'
                      src='https://images.pexels.com/photos/2529787/pexels-photo-2529787.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>

                <div className={classes.CardDiv}>
                  <Card className={classes.CardWidth}>
                    <Card.Img
                      variant='top'
                      src='https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
