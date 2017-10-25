routes.$inject = ['$stateProvider'];

export default ($stateProvider) => {
    $stateProvider
        .state('rootComponentState', {
            url: '/',
            templateUrl: './app/components/template.html',
        })
}
