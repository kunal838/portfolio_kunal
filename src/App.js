
import './App.css';
import Home from "./Home.js"
import Users from "./Users.js"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import HomeIcon from '@material-ui/icons/Home';



function App() {
  return (
    <div className="App">
      
      
      <Router>
      <div className="app__headers">
        <nav className="app__header">
        <div className="app__logo">
          <div className="icon"><AllInclusiveIcon/></div>
        KUNAL

      </div>
          <ul className="app__link">
            <li className="kp">
              <Link to="/"><AirplanemodeActiveIcon/>HOME</Link>
            </li>
            <li className="kp">
              <Link to="/projects"><AirportShuttleIcon/>PROJECTS</Link>
            </li>
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route path="/projects">
            <Users link="https://clone-7bb36.web.app/" />
            <Users link="https://twitter-clone-3c380.web.app/"/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}





     
    
   
  


export default App;
