routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('components', {
            url: '/',
            templateUrl: './app/Components/components.template.html'
        });
}
