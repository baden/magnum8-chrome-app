/* global angular:true */

'use strict';

angular.module('services.log', [])

.factory('Log', ['$rootScope', function($rootScope) {

    console.log('Log');


    function Logger(){
        console.log('new Logger');

        this.buffer = [];
        this.scope = $rootScope.$new(true);
        this.prevdt = new Date();
    }

    Logger.prototype.log = function(data){
        var dt = new Date();
        var element = {
            delta: dt - this.prevdt,
            dt: dt,
            value: data
        };
        console.log('Log:', data);
        this.buffer.push(element);
        this.scope.$emit('log', element);
    };

    var log = {
        logger: Logger
    };

    return log;
}]);
