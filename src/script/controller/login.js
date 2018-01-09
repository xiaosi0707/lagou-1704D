'use strict';
angular.module('app').controller('Login', function ($scope, $http, $state, $cookies) {
    $scope.submit = function () {
        $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login').then(function (res) {
            if (res.data.id) {
                $cookies.put('id', res.data.id);
                $cookies.put('name', res.data.name);
                $cookies.put('avatar', res.data.image);
                $state.go('position-list');
            }
        });
    };

});