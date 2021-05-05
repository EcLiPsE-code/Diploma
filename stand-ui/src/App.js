import React from 'react'
import Layout from "./layout/layout";
import {Route, Switch} from 'react-router-dom'
import Home from "./containers/pages/home/home";
import Protocols from "./containers/pages/protocols/protocols";
import Accidents from "./containers/pages/accidents/accidents";
import Charts from "./containers/pages/charts/charts";
import PersonalArea from "./containers/pages/personalArea/personalArea";

function App() {
  return (
      <Layout>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/protocols' component={Protocols}/>
              <Route path='/accidents' component={Accidents}/>
              <Route path='/charts' component={Charts}/>
              <Route path='/personalArea' component={PersonalArea}/>
          </Switch>
      </Layout>
  );
}

export default App;
