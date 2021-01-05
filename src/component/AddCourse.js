import React, { Fragment } from 'react';
import { FormGroup,Form,Input, Container, Button } from 'reactstrap';



const AddCourse=()=>{
 
    return (


  <Fragment>
      <h1 className="text-center mt-5">Fill the Form</h1>
      <Form>

<FormGroup>
    <lebel for="id">CourseId</lebel>
    <Input type="text" placeholder="Input CourseId here" name="userId" id="userId"/>
</FormGroup>

<FormGroup>
    <lebel for="id">Course Title</lebel>
    <Input type="text" placeholder="Input Course-title here" name="title" id="title"/>
</FormGroup>

<FormGroup>
    <lebel for="description">Description</lebel>
    <Input type="textarea" placeholder="Input Description here" 
           name="des" id="des" style={{height:120}}/>
</FormGroup>

<Container className="text-center">
    <Button color="primary">Register here</Button>
    <Button color="warning ml-3">Clear</Button>

</Container>
      </Form>
  </Fragment>
    );
}
export default AddCourse;