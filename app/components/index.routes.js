const componentRoute = ($stateProvider) => {
    $stateProvider
    .state('rootComponentState', {
        url: '/',
        templateUrl: './app/components/index.template.html',
    })
    .state('aboutComponentState', {
        url: '/about',
        component: 'aboutComponent'
    })
    .state('serviceComponentState', {
        url: '/service',
        component: 'serviceComponent'
    })
}
componentRoute.$inject = ['$stateProvider'];

export default componentRoute;
