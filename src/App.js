import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key={"general"} category="general" />}></Route>
            <Route exact path='/Business' element={<News key={"business"} category="business" />}></Route>
            <Route exact path='/Entertainment' element={<News key={"entertainment"} category="entertainment" />}></Route>
            <Route exact path='/General' element={<News key={"general"} category="general" />}></Route>
            <Route exact path='/Health' element={<News key={"health"} category="health" />}></Route>
            <Route exact path='/General' element={<News key={"general"} category="general" />}></Route>
            <Route exact path='/Science' element={<News key={"science"} category="science" />}></Route>
            <Route exact path='/Sports' element={<News key={"sports"} category="sports" />}></Route>
            <Route exact path='/Technology' element={<News key={"technology"} category="technology" />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}