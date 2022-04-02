import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Videos from './Components/Videos/Videos';

export const ProductContext = createContext()
function App() {
  const [products, setProducts] = useState([])
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </ProductContext.Provider>
  );
}

export default App;
