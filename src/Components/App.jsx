import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';
import {Route,Routes} from 'react-router-dom';
import NotFound from './NotFound/NotFound';


export default class App extends Component {
  render() {
    return (
      <>
      < Navbar />
<Routes>
<Route path='/' element={<Header/>}></Route>
<Route path='Header' element={<Header/>}></Route>
  <Route path='Portfolio' element={<Portfolio/>}></Route>
  <Route path='About' element={<About/>}></Route>
  <Route path='Contact' element={<Contact/>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
</Routes>
      < Footer />
      <Copyright/>
      </>
    )
  }
}
