import angular from 'angular';
import uiRouter from 'angular-ui-router';

// App Routes
import appRoutes from './app.routes';

// Root Component
import rootComponent from './components';

angular.module('App', [uiRouter, rootComponent])
.config(appRoutes);
