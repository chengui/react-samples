import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import routes from './constants/route';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
      {
        routes.map(route => (
          <Route exact
            key={route.name}
            path={route.path}
            component={
              loadable(() => import(`./pages/${route.component}`))
            }
          />
        ))
      }
      </Switch>
    );
  }
}

export default Routes;
