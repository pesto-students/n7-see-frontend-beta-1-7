import React from 'react';
import { Switch, Route,useHistory, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './assets/style.css';
import  Register from './container/Register';
import  Login from './container/Login';
import NavBar from './components/NavBar';
import {
Grid
} from '@material-ui/core';
import MainLayout from "./container/Layouts/MainLayout";
import Dashboard from "./container/Layouts/Dashboard";
import Home from './container/Home/Home';
function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Dashboard>
       <Route path="/" component={Home}/>
    </Dashboard>

    {/* <Route exact path="/home" component={Home} /> */}
    {/* <Route path="/features" component={FeaturePage} /> */}
    {/* <Layout>
        {
        FlatNav.map((nav, index) => {
          return nav.component && <Route key={index} exact path={nav.to} component={page[nav.component]} />
        })
          }
  </Layout> */}
  {/* <Route path="" component={NotFoundPage} /> */}
  </Switch>
  </Router>
    // <div className="App">
    //   <div className="bg">
    //   <Register/>
    //   </div>
     
    // </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import './assets/style.css';
// import NavBar from './components/NavBar';
// import {
// Grid
// } from '@material-ui/core';
// import Home from './container/Home';

// function App() {
//   return (
//     <div className="App">
//       <div className="bg">
//       {/* <Register/> */}
//       <Home />
//       </div>
     
//     </div>
//   );
// }

// export default App;
