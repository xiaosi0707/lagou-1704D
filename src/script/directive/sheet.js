angular.module('app').directive('appSheet', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl: 'view/template/sheet.html',
       scope: {
           data: '=',
           flag: '=',
           sFn: '&'
       },
       link: function (scope) {
           scope.sheetClick = function (dObj) {
               scope.sFn({obj: dObj});
           }

       }

   }
});