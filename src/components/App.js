<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import BadgeDetails from "../pages/BadgeDetailsContainer";
import Home from "../pages/Home";
import BadgeEdit from "../pages/BadgeEdit";
=======
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
<<<<<<< HEAD
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
=======
          <Route component={NotFound} />
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
