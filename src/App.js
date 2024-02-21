import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './portfolio/Header';
import About from './portfolio/About';
import Project from './portfolio/Project';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';
import tech from './Image/tech.png'
import Review from './portfolio/Review';



const App = () => {
  return (<>
 
    <Header ownerName="Rohit Rajput" fileName="projects"
      contant="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
    />
    <About btn="contact" fileName="projects" />
    <div className="pro">
      <Project

      />
    </div>
    <Review/>
    <Contact btn="contact" imgsrc={tech} />
    
    <Footer ownerName="Rohit Rajput"
      contant="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
    />

  </>
  )
}
export default App