routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/Components/HomePage/home.template.html'
        });
}