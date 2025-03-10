import React from 'react'
import './Css/Style.css'
import Img from './Assets/Image/img1.jpg'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Project from './components/Project.js'
function App() {
  
  const name="SUNITHA";
  const role="DEVELOPER";
  const source=<img src={Img} alt="img"/>

  return (
    <div>
      <Header/>
      <Home name={name} role={role} source={source}/>
      <About source={source}/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App