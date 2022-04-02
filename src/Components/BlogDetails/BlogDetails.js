import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../App';

const BlogDetails = () => {
    const [products, setProducts] = useContext(ProductContext)
    const { id } = useParams()
    const blog = products.find(product => product._id === id)

    return (
        <div className='container'>
            <img src={blog.imageURL} alt="" />
            <h4>{blog.title}</h4>
            <p>{blog.blog}</p>

        </div>
    );
};

export default BlogDetails;
