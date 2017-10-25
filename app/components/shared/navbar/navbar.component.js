/**
 * Navbar Controller Class
 */
class NavbarCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
    }

    // Methods for Navbar goes here...
}

export const navbarComponent = {
    controller: NavbarCtrl,
    controllerAs: 'mv',
    templateUrl: './app/components/shared/navbar/navbar.template.html',
    bindings: {}
}