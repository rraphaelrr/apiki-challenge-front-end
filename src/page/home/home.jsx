import React, { Component } from 'react';
import api from '../../service/api';

import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        let post = [];
        api.get("posts?_embed&categories=518").then((res) => {
            res.data.map(index => {
                post.push(index)
            })

        })
        this.setState({ posts: post })
    }

 

    render() {
        return (

            <section className='homeApiki'>
                <Container>
                {this.state.posts.map(function (index) {
                    console.log(index)
                                return (    
                                    <Row key={index.id}>
                                        <Col>
                                            {index.title.rendered}
                                        </Col>
                                    </Row>
                                )
                            })}
                    <Row>
                        <Col md="6" >
                            <h1>Hello</h1>
                        </Col>
                        <Col md="6" >
                            <h1>World</h1>
                        </Col>
                    </Row>
                </Container>


            </section>

        )

    }
}

export default Home;