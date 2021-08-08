import Nav from './Nav.js'
import Home from './Home.js'
import Project from './Project.js'
import Work from './Work.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import ProjectDetails from './ProjectDetails.js'
import Footer from './Footer.js'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <div className="content">
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route exact path ='/project'>
            <Project></Project>
          </Route>
          <Route exact path ='/work/:id'> 
            <Work></Work>
          </Route>
          <Route exact path ='/project/:id'>
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
