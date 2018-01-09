'use strict';

angular.module('app').directive('appPositionClass', function () {
    return {
        restrict: 'EA',
        replace: 'true',
        templateUrl: 'view/template/position-class.html',
        scope: {
            data: '='
        },
        link: function (scope, $watch) {
            scope.isActive = 0;
            scope.positionSelect = function (index) {
                scope.positionList = scope.data[index].positionList;
                scope.isActive = index;
            };

            scope.$watch('data', function (newVal) {
                if (scope.data) scope.positionSelect(0);
            })
        }
    }
});