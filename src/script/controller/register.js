'use strict';
angular.module('app').controller('Register', function ($scope, $http, $state) {
    $scope.submit = function () {
        $http.get(' https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/register').then(function (res) {
            if (res.data.id) {
                $state.go('login');
            }
        });
    };
});