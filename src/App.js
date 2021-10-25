import React from "react";
import Menu from "./component/Menu";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { routes } from "./component/Routes";
class App extends React.Component {
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return result;
  };
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>{this.showContentMenu(routes)}</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
