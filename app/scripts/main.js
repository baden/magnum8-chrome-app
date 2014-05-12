/* global angular:true */

'use strict';


console.log('begin of main.js');

// console.log('serial=', serial);




angular.module('app', ['directives']);

angular.module('app').controller('AppCtrl', ['$scope', 'Serial', 'Log',
    function($scope, Serial, Log) {

        var log = $scope.log = new Log.logger();

        console.log('AppCtrl');
        $scope.ports = [{
            portPath: '1'
        }];

        $scope.onConnect = function(port){
            log.log('Open', port);

            var connection = new Serial.SerialConnection();

            log.log('connection=', connection);

            connection.onConnect.addListener(function() {

                // console.log('connected to: ' + port);
                log.log('connected to: ' + port);
                // connection.send("hello arduino");
                $scope.$apply(function(){
                    $scope.connected = true;
                    $scope.onDisconnect = function(){
                        connection.disconnect();
                        $scope.connected = false;
                    };
                });
            });

            connection.onReadLine.addListener(function(line) {
                // console.log('read line: ' + line);
                log.log('read line: ' + line);
            });

            connection.connect(port);
        };

        log.log('Ready.');
    }
]);
