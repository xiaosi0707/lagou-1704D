'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('example', {
        url: '/example',
        templateUrl: 'view/example.html'
    });
    $urlRouterProvider.otherwise('example');
}]);
