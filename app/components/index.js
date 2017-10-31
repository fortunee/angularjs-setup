import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Component Routes
import componentRoutes from './index.routes';

// Services
import AppService from './../services/app.service';

// Components
import { navbarComponent } from './shared/navbar/navbar.component';
import { footerComponent } from './shared/footer/footer.component';

import { aboutComponent } from './about/about.component';
import { serviceComponent } from './service/service.component'

export default angular.module('rootComponent', [uiRouter])
    .config(componentRoutes)
    .service('AppService', AppService)
    .component('navbarComponent', navbarComponent)
    .component('aboutComponent', aboutComponent)
    .component('serviceComponent', serviceComponent)
    .component('footerComponent', footerComponent)
    .name;
