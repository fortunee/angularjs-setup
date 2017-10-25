import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Component Routes
import componentRoutes from './index.routes';

// Components
import { navbarComponent } from './shared/navbar/navbar.component';
import { footerComponent } from './shared/footer/footer.component';

export default angular.module('rootComponent', [uiRouter])
    .config(componentRoutes)
    .component('navbarComponent', navbarComponent)
    .component('footerComponent', footerComponent)
    .name;
