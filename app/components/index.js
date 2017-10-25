import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Component Routes
import componentRoutes from './index.routes';

export default angular.module('rootComponent', [uiRouter])
    .config(componentRoutes)
    .name;
