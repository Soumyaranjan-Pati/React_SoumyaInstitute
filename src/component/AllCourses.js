import React, { useState } from 'react';
import Courses from './course';

const Allcourse=()=>{
const[courses,setCorses]=useState([

    {title:"java", description:"This is java course", fee:"10,000"},
    {title:"React", description:"This is React course", fee:"5,000"},
    {title:"Python", description:"This is Python course", fee:"7,000"},
    {title:"Angular", description:"This is Angular course", fee:"8,000"}

   ]);
return(

    <div>
      <h1 className="text-center" >All Course</h1>
      <p className="text-center font-weight-bold">List of all courses are as follows</p>
   
   { courses.length>0 ? courses.map( (item)=>
     < Courses courses1={item}/> )
   : "No courses"
   }
    </div>
);


};
export default Allcourse;