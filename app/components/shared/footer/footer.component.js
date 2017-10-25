/**
 * Footer Controller Class
 */
class FooterCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
    }

     // Methods for Footer goes here...
}

 export const footerComponent = {
     controller: FooterCtrl,
     controllerAs: 'mv',
     templateUrl: './app/components/shared/footer/footer.template.html',
     bindings: {}
 }
 