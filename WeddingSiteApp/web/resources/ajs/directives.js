angular.module('wed.directives', [])

        .directive('stopEvent', function () {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    // default to click
                    if (!attr.stopEvent)
                        attr.stopEvent = 'click';
                    element.bind(attr.stopEvent, function (e) {
                        e.stopPropagation();
                    });
                }
            };
        });


        


