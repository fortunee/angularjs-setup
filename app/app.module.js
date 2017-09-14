import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.routes';
import baseComponents from './Components'
// import home from './Components/HomePage/home.module';

angular.module('App', [uirouter, baseComponents])
.config(routes);
