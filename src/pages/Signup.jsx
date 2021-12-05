import React from 'react';
import {Card, Button, Form, InputGroup, } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import'../App.css'
import "../styles/signup.css"
import login_background from "../images/login_background.jpg"
import user_icon from "../images/user_icon.png"
import password_icon from "../images/password_icon.png"

function Signup() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = () =>{
        
        console.log(email)
        console.log(password)
    }

    return (
        <div className="container-fluid" style={{backgroundImage:`url(${login_background})`, backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat",display:"flex", flexDirection:"column", alignItems:"end", justifyContent:"center", minHeight:"100vh", paddingRight:"7vw"}}>
        <Card  style={{ width: "25rem",borderRadius:"8px", padding: "0.5rem 0", height:"fit-content" }}
        bg="light"
        className="col-lg-4 padding mx-3 my-3 shadow-lg">
            <Card.Body style={{padding:"0.2rem 0"}}>
                <Card.Title style={{fontWeight:"500", margin:"0.5rem 0", padding:"0 0 1rem 0", fontSize:"1.9rem"}}>User Signup</Card.Title>
                <Card.Text>
                    <Form style={{margin:"1rem 2rem 1rem 2rem", fontSize:"1rem"}}>
                        <Form.Group className="mb-3 input" controlId="formBasicEmail" >
                            <InputGroup>
                                <InputGroup.Text><img src={user_icon} style={{height:"1.5rem", width:"1.5rem"}} /></InputGroup.Text>
                                <Form.Control style={{backgroundColor:"transparent", border:"transparent"}} type="email" placeholder="User Email" onChange={(e)=>setEmail(e.target.value)} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3 input" controlId="formBasicEmail" >
                            <InputGroup>
                                <InputGroup.Text><img src={password_icon} style={{height:"1.7rem", width:"1.4rem"}} /></InputGroup.Text>
                                <Form.Control style={{backgroundColor:"transparent", border:"transparent"}} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                            </InputGroup>
                        </Form.Group>
                        <div className="d-grid gap-2" style={{padding:"0.2rem", fontSize:"1rem", fontWeight:"600"}}>
                        <Button style={{fontSize:"1.3rem", fontWeight:"500", borderRadius:"50px", padding:"1.5vh 3vw", margin:"2vh 0"}} variant="secondary" onClick={handleSubmit} >
                            SIGN UP
                        </Button>
                        </div>
                    </Form>
                    
                </Card.Text>
               
            </Card.Body>
        </Card>
        </div>
    )
}

export default Signup;