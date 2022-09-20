import React from 'react'
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap'

const UserProfile = () => {
  return (
      <Container fluid>
        <Row>
          <Col lg="4" className='profile'>
            <Card>
              <div className='bg__user-profile'>
                <img
                  src={require("../assets/img/avatar/bg_user_profile.jpg")}
                >
                </img>
              </div>
              <Card.Body>
                <div className='author__section'>
                  <a>
                    <img 
                      src={require("../assets/img/avatar/avatar_user.jpg")}
                    >
                    </img>
                    <h5 className='title__name'>Daniel Wolf</h5>
                  </a>
                  <p className='description'>@chetfaker</p>
                </div>
                <p className='description text-center'>
                "I like the way you work it<br/>
                No diggity <br/>
                I wanna bag it up"
                </p>
              </Card.Body>
              <Card.Footer className='footer__card-section'>
              <hr className='line__top'/>
                <div className='button__section'>
                  <Row>
                    <Col className='button__item' lg="4" md="6">
                      <h5>
                        12<br/>
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className='button__item'  lg="4" md="6">
                      <h5>
                        2GB<br/>
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className='button__item' lg="4">
                      <h5>
                        23$<br/>
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="8" className='edit__profile'>
            <Card>
              <Card.Body>
              <Card.Title>Edit Profile</Card.Title>
                <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default UserProfile