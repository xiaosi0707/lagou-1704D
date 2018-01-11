'use strict';

angular.module('app').factory('http', function ($q, $rootScope, $window) {
    return {
        request: function (config) {
            console.log('请求成功', config);
            $rootScope.isLoading = true;
            return config || $q.when(config);
        },
        requestError: function (rejection) {
            console.log('请求失败');
            return $q.reject(rejection)
        },
        response: function (response) {
            console.log('响应成功', response.config.isLoading);
            $rootScope.isLoading = false;
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            console.log('响应失败', rejection);
            switch (rejection.status) {
                case 404:
                    alert('请求地址找不到');
                case 500:
                    alert('服务器出错');
                case 403:
                    alert('无访问权限');
            }
            return $q.reject(rejection);
        }
    }
});

angular.module('app').config(function ($httpProvider) {
    $httpProvider.interceptors.push('http');
})