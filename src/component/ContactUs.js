import React from'react';
import {Card,CardBody,CardText,CardTitle} from 'reactstrap';

const Contact=()=>{
    return(
        <div>
         <Card>
             <CardTitle className="text-center display-4">Contact Us</CardTitle>
            <CardBody>
            <CardText>If you have any doubt, then immmidiately <strong>Contact with us</strong> without any hegitation.</CardText>
                <p className="lead">Mobile: <strong>9124081457</strong> </p>
                 <p className="lead"> mail: <strong>soumya.pati02@gmail.com</strong></p> 
                                   
            </CardBody>
        </Card>
        </div>
    )
}
export default Contact;