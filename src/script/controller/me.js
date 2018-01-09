'use strict';
angular.module('app').controller('Me', function ($scope, $http, $cookies, $state) {
    $scope.name = $cookies.get('name');
    $scope.avatar = $cookies.get('avatar');
    $scope.logout = function () {
        $cookies.remove('id');
        $cookies.remove('name');
        $cookies.remove('avatar');
        $state.go('position-list');
    };
});