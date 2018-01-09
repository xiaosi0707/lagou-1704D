angular.module('app').directive('appSheet', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl: 'view/template/sheet.html',
       scope: {
           data: '=',
           flag: '='
       },
       link: function (scope) {
           console.log(scope.flag);
       }

   }
});