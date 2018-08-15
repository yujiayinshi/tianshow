import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routers'

const RouteWithSubRoutes = (route) => {
  return <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} user={route.user} />
  )} />
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return <RouteWithSubRoutes key={index} {...route} />
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
