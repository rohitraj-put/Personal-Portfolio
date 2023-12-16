import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Image/logo.jpg'
import TypingAnimator from 'react-typing-animator';


const Header = (props) => {
    const textArray = ['front-end','html', 'css', 'javascript', 'React', 'jquery', 'Responsive'];
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ position: "fixed" }}>
                <Container>
                    <img style={{ width: "60px", marginRight: "10px", borderRadius: "50%" }} src={logo} alt='rohit' />
                    <Navbar.Brand className='brand'>{props.ownerName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href='#' >Home</Nav.Link>
                            <Nav.Link href="#about" >About</Nav.Link>
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
           
            <main>
                <div className='left'>
                    <h1 className='animate__animated animate__backInDown'>HEY, I'M {props.ownerName}
                    <TypingAnimator
                textArray={textArray}
                cursorColor="rgb(120, 67, 233)"
                textColor="rgb(120, 67, 233)"
                fontSize="3rem"
                loop
                typingSpeed={30}
                delaySpeed={1000}
                backspace
                height="80px"
            />
                    </h1>
                    <p className='animate__animated animate__backInLeft'>{props.contant}</p>
                    <button className='btn-bg btn-hov'><a href='#project' style={{ color: "white", textDecoration: "none" }}>{props.fileName}</a></button>
                </div>
                <div className='mouse'></div>

            </main>

        </>
    )
}

export default Header