import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
      <Footer/>
      <MobileNav/>
    </BrowserRouter>
      </>
    )
  }
}
