import React from 'react'
import { Accordion, Button, Card, Col, Container, OverlayTrigger, Popover, Row, Table } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { VectorMap } from '@south-paw/react-vector-maps';
import map from '../assets/Maps/world.json'


const Dashboard = () => {
  const popover = (
    <Popover>
      <Popover.Header as='h3'>Popover right</Popover.Header>
      <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
      </Popover.Body>
    </Popover>
  )


  return (
    <>
        <Container fluid>
          <Row>
            <Col lg="3" sm="6">
              <Card className='card__stats'>
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className='icon__big'>
                          {/* <GrCommand style={{style: "orange"}}/> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-ubuntu" viewBox="0 0 16 16">
                            <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z"/>
                          </svg>
                        </div>
                      </Col>
                      <Col xs="7" id="card__text">
                        <div className='right__text'>
                          <p className='top__info-text'>Number</p>
                          <Card.Title>220GB</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                  <div className='footer__stats'>
                    Update Now
                  </div>
                  </Card.Footer>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className='card__stats'>
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className='icon__big'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#198754" class="bi bi-x-diamond-fill" viewBox="0 0 16 16">
                            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
                          </svg>
                        </div>
                      </Col>
                      <Col xs="7" id="card__text">
                        <div className='right__text'>
                          <p className='top__info-text'>Number</p>
                          <Card.Title>220GB</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                  <div className='footer__stats'>
                    Update Now
                  </div>
                  </Card.Footer>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className='card__stats'>
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className='icon__big'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#d63384" class="bi bi-unity" viewBox="0 0 16 16">
                          <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8L15 11.2Z"/>
                        </svg>
                        </div>
                      </Col>
                      <Col xs="7" id="card__text">
                        <div className='right__text'>
                          <p className='top__info-text'>Number</p>
                          <Card.Title>220GB</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                  <div className='footer__stats'>
                    Update Now
                  </div>
                  </Card.Footer>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className='card__stats'>
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className='icon__big'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6610f2" class="bi bi-quora" viewBox="0 0 16 16">
                        <path d="M8.73 12.476c-.554-1.091-1.204-2.193-2.473-2.193-.242 0-.484.04-.707.142l-.43-.863c.525-.45 1.373-.808 2.464-.808 1.697 0 2.568.818 3.26 1.86.41-.89.605-2.093.605-3.584 0-3.724-1.165-5.636-3.885-5.636-2.68 0-3.839 1.912-3.839 5.636 0 3.704 1.159 5.596 3.84 5.596.425 0 .811-.046 1.166-.15Zm.665 1.3a7.127 7.127 0 0 1-1.83.244C3.994 14.02.5 11.172.5 7.03.5 2.849 3.995 0 7.564 0c3.63 0 7.09 2.828 7.09 7.03 0 2.337-1.09 4.236-2.675 5.464.512.767 1.04 1.277 1.773 1.277.802 0 1.125-.62 1.179-1.105h1.043c.061.647-.262 3.334-3.178 3.334-1.767 0-2.7-1.024-3.4-2.224Z"/>
                        </svg>
                        </div>
                      </Col>
                      <Col xs="7" id="card__text">
                        <div className='right__text'>
                          <p className='top__info-text'>Number</p>
                          <Card.Title>220GB</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                  <div className='footer__stats'>
                    Update Now
                  </div>
                  </Card.Footer>
              </Card>
            </Col>
          </Row>
          {/* Accordion */}
          <Row className='accordion__section'>
            <Col lg="8" sm="12">
              <Card className='accordion__card'>
                <Card.Header className='accordion__header'>
                  <Card.Title className='accordion__title'>Schedule</Card.Title>
                  <p>24 hour performance</p>
                </Card.Header>
                <Card.Body>
                  <Accordion defaultActiveKey="0">
                    <AccordionItem eventKey='0' className='accordion__item-1'>
                      <Accordion.Header>Collapsible Group Item #1</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey='1'  className='accordion__item-1'>
                      <Accordion.Header>Collapsible Group Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey='2'  className='accordion__item-1'>
                      <Accordion.Header>Collapsible Group Item #3</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </AccordionItem>
                  </Accordion>
                </Card.Body>
                <Card.Footer className='schedule__footer'>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <Button variant="primary">Go somewhere</Button>
                </OverlayTrigger>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg="4" sm="12">
              <Card>
                <div className='card__img'>
                  <img
                    src={require("../assets/img/carousel/christopher-gower-m_HRfLhgABo-unsplash.jpg")}
                  >
                  </img>
                </div>
                <Card.Body>
                    <Card.Title>Technology</Card.Title>
                    <p className='technology'>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Card.Body>
                <Card.Footer className='schedule__footer'>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <Button variant="success">Go somewhere</Button>
                </OverlayTrigger>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

                    {/* Table */}
            <Row>
            <Col lg="7">
              <Table striped border hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Francisco</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <th>Curt</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>2</th>
                      <th>Alex</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>3</th>
                      <th>Sam</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>4</th>
                      <th>Rodrigo</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>5</th>
                      <th>Daniel</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>6</th>
                      <th>Daniel</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>7</th>
                      <th>Daniel</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>8</th>
                      <th>Daniel</th>
                      <th>Last </th>
                      <th>Username</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                      <th>Color</th>
                    </tr>
                  </tbody>
              </Table>
            </Col>
            <Col lg="5">
            <Card className='world__map'>
            <Card.Header>
              <Card.Title style={{textAlign: 'center'}}>World Map</Card.Title>
            </Card.Header>
              <Card.Body>
                <VectorMap {...map}/>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
    </>
      
  )
}

export default Dashboard