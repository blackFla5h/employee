import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import hrc_logo from "../images/hrc_logo.png"
import settings from "../images/settings.jpg"
import "../styles/navbar.css"

function Header() {
    return (
        <Navbar className="sticky-top" style={{paddingTop:0, paddingBottom:0, boxShadow:"0 4px 6px -6px #222"}} expand={false}>
        <Container fluid>
          <Navbar.Brand  href="#"><img src={hrc_logo} style={{height:"2.7rem", width:"12rem", objectFit:"contain"}} alt="not found"/></Navbar.Brand>
          <Navbar.Toggle className="butt" style={{border:"none"}}><img className="settings" src={settings} style={{margin:"1vh 1vw", height:"2rem", width:"2rem", objectFit:"contain"}} alt="not found" /></Navbar.Toggle>
        </Container>
        </Navbar>
    )
}

export default Header
