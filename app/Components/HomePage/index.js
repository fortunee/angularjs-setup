import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './home.routes.js';

export default angular.module('App.home', [uirouter])
    .config(routes);
