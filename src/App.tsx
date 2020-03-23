import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withErrorBoundary } from './ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { DashboardRoutes } from './ignitus-Routes/ignitus-DashboardRoutes';
// eslint-disable-next-line import/named
import { PublicRoutes } from './ignitus-Routes/ignitus-PublicRoutes';
import './App.scss';
import UserInterfaceKitRoutes from './ignitus-Routes/ignitus-UserInterfaceKitRoutes';


const App = () => (
  <div className="content-container">
    <Switch>
      <Route path="/dashboard" component={DashboardRoutes} />
      <Route path="/interface" component={UserInterfaceKitRoutes} />
      <Route path="/" component={PublicRoutes} />
    </Switch>
  </div>
);

export default withErrorBoundary(App);
