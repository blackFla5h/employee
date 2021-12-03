import React from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap'
import Header from '../components/Header'

export default function Dashboard() {
    return (
        <div style={{minHeight:"100vh"}}>
            <Header/>
            <div style={{height:"90.7vh", backgroundColor:"#666666"}}>
            <div style={{display:"flex", padding:"2vh 2vw", color:"white", backgroundColor:"#4FC4F7"}}>
                <div style={{paddingRight:"5vw",paddingTop:"0.8vh" ,fontSize:"1rem", verticalAlign:"middle"}}>Pulse Check </div>
                <DropdownButton id="dropdown-basic-button" title="Mark your pulse">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
            
            <div style={{margin:"2vh 3vw", backgroundColor:"white", height:"75vh", borderRadius:"20px"}}>
                Hi
            </div>
            </div>
        </div>
    )
}
