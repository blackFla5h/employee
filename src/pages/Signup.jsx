import React from 'react';
import {Card, Button, Form, } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import'../App.css'
import "../styles/signup.css"

function Signup() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = () =>{
        
        console.log(email)
        console.log(password)
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", verticalAlign:"middle", minHeight:"100vh"}}>
        <Card  style={{ width: "25rem",borderRadius:"10px", padding: "0.5rem 0", height:"fit-content" }}
        bg="light"
        className="col-lg-4 padding mx-3 my-3 shadow-lg">
            <Card.Body style={{padding:"0.2rem 0"}}>
                <Card.Title style={{boxShadow:"0 4px 6px -6px #83d167", fontWeight:"600", margin:"0.5rem 0", padding:"0 0 1rem 0", letterSpacing:"0.08rem"}}>SIGN UP</Card.Title>
                <Card.Text>
                    <Form style={{margin:"3rem 2rem 2rem 2rem", fontSize:"1rem"}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{padding:".2rem"}}>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" style={{padding:"0.2rem"}}>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </Form.Group>
                        <div className="d-grid gap-2" style={{padding:"0.2rem", fontSize:"1rem", fontWeight:"600"}}>
                        <Button style={{fontSize:"1rem", fontWeight:"600", borderRadius:"0"}} variant="secondary" onClick={handleSubmit} >
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