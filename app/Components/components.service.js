
export default class HomeService {
    constructor($http) {
        this.$http = $http;
    }

    getData() {
        const endPoint = 'https://599305142b160100110b6b3c.mockapi.io/api/test/comments';
        return this.$http.get(endPoint);
    }
}