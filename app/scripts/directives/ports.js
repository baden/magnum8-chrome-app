/* global angular:true */

'use strict';


angular.module('directives.ports', ['services.serial'])

.directive('ports', [
    function() {
        console.log('ports');
        return {
            restrict: 'E',
            replace: true,
            // require: 'ngModel',
            // scope: {
            //     port: '='
            // },
            // scope: {
            //     onOpened: '='
            // },
            template: '<select class="ports form-control" ng-model="port" ng-options="port.path for port in ports"><option value="">Выберите порт</option></select>',
            controller: [
                '$scope', 'Serial',
                function($scope, Serial){
                    $scope.ports = [{path:'12'}];
                    Serial.getDevices().then(function(ports){
                        $scope.ports = ports;
                        console.log('ports=', ports);
                    });
                }
            ]
        };
    }
]);
