import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Blogs.css'

const Blogs = (props) => {
    const { imageURL, title, admin, blog, _id } = props.product
    const navigate = useNavigate()
    return (
        <div className='container'>
            <Row className='mt-5'>
                <Col sm={4} className='blog-img' >
                    <img src={imageURL} alt="" />
                </Col>
                <Col sm={8} className='info w-50 mx-auto'>
                    <h4>{title}</h4>
                    <p><small>{admin}</small></p>
                    <p>{blog.slice(0, 500)} <button onClick={() => navigate(`/blog/${_id}`)} className='more-btn'>...Read more</button></p>
                </Col>
            </Row>
        </div >
    );
};

export default Blogs;