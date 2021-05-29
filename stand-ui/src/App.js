import React from 'react'
import Layout from './layout/layout'
import {Route, Switch} from 'react-router-dom'
import Home from './containers/pages/test/home'
import Protocols from './containers/pages/protocols/protocols'
import Accidents from './containers/pages/accidents/accidents'
import Charts from './containers/pages/charts/charts'
import PersonalArea from './containers/pages/personalArea/personalArea'
import StartPage from './containers/pages/start/start'
import EditUsers from "./containers/pages/editUsers/editUsers";
import EditProtocols from "./containers/pages/editProtocols/EditProtocols";
import EditMethodology from "./containers/pages/editMethodologys/editMethodologys";

function App() {
  return (
      <Layout>
          <Switch>
              <Route exact path='/' component={StartPage} />
              <Route path='/test' component={Home}/>
              <Route path='/protocols' component={Protocols}/>
              <Route path='/accidents' component={Accidents}/>
              <Route path='/charts' component={Charts}/>
              <Route path='/personalArea' component={PersonalArea}/>
              <Route path='/editUsers' component={EditUsers} />
              <Route path='/editProtocols' component={EditProtocols} />
              <Route path='/editMethodologys' component={EditMethodology} />
          </Switch>
      </Layout>
  );
}

export default App;
