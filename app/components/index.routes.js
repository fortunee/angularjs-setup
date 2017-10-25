const componentRoute = ($stateProvider) => {
    $stateProvider
    .state('rootComponentState', {
        url: '/',
        templateUrl: './app/components/index.template.html',
    })
}
componentRoute.$inject = ['$stateProvider'];

export default componentRoute