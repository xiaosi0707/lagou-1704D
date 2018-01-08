angular.module('app').directive('appBody', function () {
   return {
       restrict: 'A',
       replace: true,
       templateUrl: 'view/template/body.html'
   }
});