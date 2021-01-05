import React from 'react';
import { Jumbotron,Button } from 'reactstrap';

const Home=()=>{
    return(
        <div>
            <Jumbotron className="text-center">
            <h2 className="display-4">Wellcome To SOUMYA World</h2>
               <p>Here you can learn Angular, Java, Python, React with minimum price.</p>
              <Button color="success" outline>Search</Button>
            </Jumbotron>
        </div>
    )
}
export default Home ;