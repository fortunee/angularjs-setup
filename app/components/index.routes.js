routes.$inject = ['$stateProvider'];

export default ($stateProvider) => {
    $stateProvider
        .state('rootComponentState', {
            url: '/',
            templateUrl: './app/components/index.template.html',
        })
}
