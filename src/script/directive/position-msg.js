'use strict';

angular.module('app').directive('appPositionMsg', function () {
    return {
        restrict: 'EA',
        replace: 'true',
        templateUrl: 'view/template/position-msg.html',
        scope: {
            data: '='
        }
    }
});