import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menu=()=>{
    return(
        <div>
            <ListGroup>
                <ListGroupItem tag="a" href="/home" action> Home </ListGroupItem>         
                <ListGroupItem tag="a" href="/add-course" action>AddCourse</ListGroupItem>
                <ListGroupItem tag="a" href="/all-course" action> View Course </ListGroupItem>         
                <ListGroupItem tag="a" href="/About" action>About</ListGroupItem>
                <ListGroupItem tag="a" href="/contact-us" action>Contact Us</ListGroupItem>

            </ListGroup>
        </div>
    );
}
export default Menu;