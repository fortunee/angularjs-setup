import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Component Routes
import componentRoutes from './index.routes';

// Components
import { navbarComponent } from './shared/navbar/navbar.component';
import { footerComponent } from './shared/footer/footer.component';

import { aboutComponent } from './about/about.component';

export default angular.module('rootComponent', [uiRouter])
    .config(componentRoutes)
    .component('navbarComponent', navbarComponent)
    .component('aboutComponent', aboutComponent)
    .component('footerComponent', footerComponent)
    .name;
