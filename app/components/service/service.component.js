class ServiceCtrl {
    constructor(AppService) {
        'ngInject';
        angular.extend(this, {
            AppService
        });
        this.users = [];
    }

    loadUsers() {
        this.AppService.fetchUsers().then((users) => {
            this.users = users;
            console.log(this.users);
        })
    }
}

export const serviceComponent = {
    controllerAs: 'mv',
    controller: ServiceCtrl,
    templateUrl: './app/components/service/service.template.html'
}
