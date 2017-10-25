import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Routes
import routes from './index.routes';

export default angular.module('rootComponent', [uiRouter])
    .config(routes)
    .name;
