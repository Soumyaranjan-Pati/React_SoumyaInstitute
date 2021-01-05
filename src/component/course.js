import React from 'react';
import {Card,CardBody,CardText,CardTitle,Button} from 'reactstrap' 

const Courses=({courses1})=>{
    return (
        <Card className="bg-success text-center">
            <CardBody>
                <CardTitle>{courses1.title} course  </CardTitle>
              <CardText>course description is: {courses1.description}</CardText>
              <CardText>course fee is: {courses1.fee}</CardText>
              <Button color="danger">Delete</Button>
              <Button color="warning ml-3">Update</Button>
            </CardBody>
        </Card>
    );
}
export default Courses;