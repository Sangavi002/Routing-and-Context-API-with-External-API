import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Page/Home';
import About from './Page/About';
import Product from './Page/Product';
import Navbar from './Component/Navbar'
import ProductDetail from './Page/ProductDetail';


function App() {
    return(
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/product/:userId' element={<ProductDetail/>} />
        </Routes>
        </>
    )
  
}

export default App
