import angular from 'angular';
import uirouter from 'angular-ui-router';

// Routes
import routes from './components.routes.js';

// Components
import { homePageComponent } from './HomePage/home.component';

// Services
import ComponentService from './components.service';

export default angular.module('App.components', [uirouter])
    .config(routes)
    .component('homePageComponent', homePageComponent)
    .service('ComponentService', ComponentService)
    .name