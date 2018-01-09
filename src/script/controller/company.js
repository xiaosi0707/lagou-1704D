'use strict';
angular.module('app').controller('Company', function ($scope, $http, $state) {
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/company').then(function (res) {
        var id = $state.params.id;
        $scope.companyMsg = res.data[id];
        $scope.positionClass = res.data[id].positionClass;
    });
});