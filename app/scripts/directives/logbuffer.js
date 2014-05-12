/* global angular:true, d3:true */

'use strict';

angular.module('directives.logbuffer', ['services.log'])

.directive('logbuffer', [
    function() {
        console.log('logbuffer');
        var format = d3.time.format('%d/%m/%Y');
        return {
            restrict: 'E',
            replace: true,
            template: '<pre class="logbuffer"></pre>',
            scope: {
                log: '=log'
            },
            controller: [
                '$element', '$scope', 'Log',
                function($element, $scope, Log){
                    console.log('Log=', Log, $element, $scope.log);

                    $scope.log.scope.$on('log', function(event, data){
                        console.log('ON: ', data);
                        $element.append(
                            '<p>'+
                                '<a>' + format(data.dt) + '</a>' +
                                '<span class="timedelta">' + data.delta.toLocaleString() + '</span>' +
                                data.value +
                            '</p>'
                        );
                    });
                }
            ]
        };
    }
]);
