class AboutCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
        this.title = 'About'
    }


}

export const aboutComponent = {
    controllerAs: 'mv',
    controller: AboutCtrl,
    templateUrl: './app/components/about/about.template.html'
}
