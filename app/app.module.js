import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Routes
import routes from './app.routes';

// Root Component
import rootComponent from './components';

angular.module('App', [uiRouter, rootComponent])
.config(routes);
