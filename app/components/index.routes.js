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
}
componentRoute.$inject = ['$stateProvider'];

export default componentRoute;
