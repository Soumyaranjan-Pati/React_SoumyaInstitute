import { Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import AddCourse from './component/AddCourse';
import Allcourse from './component/AllCourses';
import Header from './component/Header';
import Section from './component/Section';
import {ToastContainer,tost} from 'react-toastify';
import Contact from './component/ContactUs';

function App() {
  return (
   <div>
     
       <ToastContainer/>
       <Container>
     
            <Header/>
           <Section/>
           {/* <Allcourse/>
           <AddCourse/>
           <Contact/> */}
       </Container>
     
     
    
    </div>
  );
}

export default App;
