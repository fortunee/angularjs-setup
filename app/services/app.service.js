export default class AppService {
    constructor($http) {
        this._$http = $http;
    }

    fetchUsers() {
        const url = 'https://59f864f0d4d1700012b7623a.mockapi.io/api/users';
        return this._$http.get(url).then(res => res.data);
    }
}
