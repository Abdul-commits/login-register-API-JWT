import React from 'react';

import {Container} from '@material-ui/core'




const Home = props => {
  return (
    <Container maxWidth = 'sm'  >
    <div style={{background: 'black'}}>
      

      <h1 style = {{color: 'white', textAlign : 'center'}}>MCBIRD</h1>
        

        <h2 style = {{color: 'white',  textAlign : 'center'}}>Develop an application in React JS which has the functionality to login, register, routing to dashboard, data population to a table from API and logout. You can develop based on use cases such as library management or customer management.
 
   </h2>
        <h2 style = {{color: 'white' , textAlign : 'center'}}> You can use any kind of dummy backends to make the application work. Login and API interactions must be based on JWT.
</h2>
      </div>
      </Container>
    
  );
};
export default Home;
