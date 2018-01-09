'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('position-list', {
        url: '/position-list',
        templateUrl: 'view/position-list.html'
    }).state('position-info', {
        url: '/position-info/:id',
        templateUrl: 'view/position-info.html'
    }).state('company', {
        url: '/company/:id',
        templateUrl: 'view/company.html'
    }).state('me', {
        url: '/me',
        templateUrl: 'view/me.html'
    }).state('login', {
        url: '/login',
        templateUrl: 'view/login.html'
    });
    $urlRouterProvider.otherwise('position-list');
}]);
