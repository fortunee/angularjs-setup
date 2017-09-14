import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './components.routes.js';
import { homePageComponent } from './HomePage/home.component';

export default angular.module('App.components', [uirouter])
    .config(routes)
    .component('homePageComponent', homePageComponent)
    .name