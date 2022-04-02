import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../App';
import Blogs from '../Blogs/Blogs';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useContext(ProductContext)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container mx-auto my-5'>
            {
                products.map(product => <Blogs
                    key={product._id}
                    product={product}
                ></Blogs>)
            }
        </div>
    );
};

export default Home;