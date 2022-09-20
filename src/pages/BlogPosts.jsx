import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import getPosts from '../components/RoutePosts'
import getPostsSecond from '../components/RoutePostsSecond'

const BlogPosts = () => {
  return (
    <Container fluid>
        <Row>
            <Card.Text className='post__hot-new'>
                Hot Posts
            </Card.Text>
        </Row>
        <Row>
            {getPosts.map((post, idx) => (
                <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
                    <Card small className="card-post">
                        <Card.Img src={post.backgroundImage} className="post__img"></Card.Img>
                        <Card.ImgOverlay>
                        <div className='post__title-category' style={{background: `${post.categoryTheme}`}}>
                            {post.category}
                        </div>

                        </Card.ImgOverlay>
                        <Card.Body>
                        <h5 className="card-title-up">
                            <a href="#" className="post__title-new">
                              {post.title}
                            </a>
                         </h5>
                         <p className="card-text d-inline-block mb-3">{post.body}</p>
                            <span className="text-muted">{post.date}</span>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

        <Row className='card__aside-section'>
            {getPostsSecond.map((post, idx) => (
                <Col lg="4" sm="12" className="card__aside-item" key={idx}>
                    <Card small className="card-post-aside">
                        <div className='post__img-block'>
                            <Card.Img src={post.backgroundImage} className="post__img-sidebar"></Card.Img>
                        </div>
                        <Card.Body className='card_post-content'>
                            <h5 className="card-title">
                                <a href="#" className="post__title-new">
                                  {post.title}
                                </a>
                            </h5>
                            <p className="card-text d-inline-block mb-3">{post.body}</p>
                        </Card.Body>
                        <Card.Footer>
                            <span className="text-muted">{post.date}</span>

                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default BlogPosts