routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            // templateUrl: './home.template.html'
            template: require('./home.template.html')
        });
}