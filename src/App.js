import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { toast } from 'react-toastify';

import styles from './Div.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Header from './components/Header';
import NotFound from './pages/404';
import Contact from './pages/Contact';

function App() {

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    Home
                </Route>
                <Route path="/about" element={<About />}>
                    About
                </Route>
                <Route path="/contact" element={<Contact />}>
                    About
                </Route>
                <Route path="/cart" element={<Cart />}>
                    Cart
                </Route>
                <Route path="/*" element={<NotFound />}>
                    Not Found
                </Route>

            </Routes>

        </div>




    );
}

export default App;
