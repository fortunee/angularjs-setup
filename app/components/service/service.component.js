class ServiceCtrl {
    constructor(AppService) {
        'ngInject';
        angular.extend(this, {
            AppService
        });
        this.users = [];
    }

    loadUsers() {
        
    }
}

export const serviceComponent = {
    controllerAs: 'mv',
    controller: ServiceCtrl,
    templateUrl: './app/components/service/service.template.html'
}
