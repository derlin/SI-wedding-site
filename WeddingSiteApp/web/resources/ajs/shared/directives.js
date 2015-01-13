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
            
            
        })
        
        .directive('confirm', [function () {
        return {
            priority: 100,
            restrict: 'A',
            link: {
                pre: function (scope, element, attrs) {
                    var msg = attrs.confirm || "Are you sure?";

                    element.bind('click', function (event) {
                        if (!confirm(msg)) {
                            event.stopImmediatePropagation();
                            event.preventDefault;
                        }
                    });
                }
            }
        };
    }]);


        


