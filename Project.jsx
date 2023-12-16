import React, { useEffect } from 'react'
import AOS from 'aos'
import age from '../Image/age.png'
import tic from '../Image/tic.png'
import netflix from '../Image/netflix.png'
import jupiter from '../Image/jupiter.png'
import portfolio from '../Image/portfolio.png'

const Project = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  const prints = [
    'https://www.freeiconspng.com/uploads/white-technology-macbook-image-12.png',

  ]
  let live = "LIVE CODE"
  return (
    <>
      <h1 className='aboutme' id='project' style={{ textAlign: 'center', marginBottom: '80px' }} data-aos={"zoom-in-down"}>{props.fileName}</h1>
      <p className='aboutinfor' data-aos={"zoom-in-down"}>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      <div className="pro">
        <div className='box-pro'><img src={portfolio} alt='project-img' data-aos={"zoom-in-down"} /><button className='live-code'><a href='#'>{live}</a></button></div>
        <div className='box-pro'><img src={jupiter} alt='project-img' data-aos={"zoom-in-down"} /><button className='live-code'><a href='https://rohitraj-put.github.io/Jupiter-animation/' target='_blank'>{live}</a></button></div>
        <div className='box-pro'><img src={age} alt='project-img' data-aos={"zoom-in-down"} /><button className='live-code'><a href='https://rohitraj-put.github.io/Age-Calculator/' target='_blank'>{live}</a></button></div>
        <div className='box-pro'><img src={netflix} alt='project-img' data-aos={"zoom-in-down"} /><button className='live-code'><a href='https://rohitraj-put.github.io/ToDo-List/' target='_blank'>{live}</a></button></div>
        <div className='box-pro'><img src={tic} alt='project-img' data-aos={"zoom-in-down"} /><button className='live-code'><a href='https://rohitraj-put.github.io/Tic-tac-toe/' target='_blank'>{live}</a></button></div>
      </div>
    </>
  )
}

export default Project