import React , { Component , useState , useEffect , Fragment } from 'react';
import axios from 'axios'
import { Container, Header, Icon, List } from 'semantic-ui-react'
import { IActivity } from './models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashBoard } from '../../features/nav/activities/dashboard/ActivityDashBoard';

// interface Istate{
//   activities:IActivity[]
// }

const App = () => {
  const [activities , Setactivities] = useState<IActivity[]>([])


  useEffect( () =>{
  axios.get<IActivity[]>("http://localhost:5000/api/Activities")
    .then((response)=>{
      console.log(response)
      Setactivities(response.data)
    })

  }, []);
  

    return (
      <Fragment>
        <NavBar />
        <Container style={{marginTop:'7em'}}>
          <ActivityDashBoard activities={activities}/>
        </Container>
      </Fragment>
    );
  // }

 
}

export default App;
