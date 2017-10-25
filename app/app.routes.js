const appRoutes = ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
}

appRoutes.$inject = ['$urlRouterProvider'];

export default appRoutes;
