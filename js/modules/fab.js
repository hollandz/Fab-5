angular.module('fab', ['ngRoute', 'duScroll']);
angular.module('fab')
.controller('ContactController', ['$scope', function ($scope) {
    $scope.success = false;
    $scope.error = false;

    $scope.send = function () {

        $scope.error = true;
        
    }// end scope.send
}]);//end conroller definition
angular.module('fab').controller('layoutController', ['$scope', '$document', function ($scope, $document) {

    $scope.scrollToBottom = function () {
        var someElement = angular.element(document.getElementById('contact'));
        $document.scrollToElementAnimated(someElement);
    }

}]);

angular.module('fab').directive('fadeIn', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            $element.on('load', function () {

                $element.removeClass().addClass('animated fadeIn')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $element.removeClass();
                });

            });
        }
    }
})

angular.module('fab').controller('homeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.bgURL = 'img/skyline.jpg';
}]);

angular.module('fab').controller('hcController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.bgURL = 'img/skyline.jpg';
}]);

angular.module('fab').controller('galleryController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.event = $routeParams.event;
    console.log($scope.event);
}]);

angular.module('fab').config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {

        $routeProvider.
        when('/home', {
            templateUrl: 'Views/partials/_home.html',
            controller: 'homeController as home1'
        }).
        when('/events', {
            templateUrl: 'Views/partials/_events.html',
        }).
        when('/events/hc', {
            templateUrl: 'Views/partials/_hc.html',
            controller: 'hcController as hc'
        }).
        when('/about', {
            templateUrl: 'Views/partials/_about.html',
            controller: 'homeController as home2'
        }).
        when('/hotel', {
            templateUrl: 'Views/partials/_hotel.html',
            controller: 'homeController as home3'
        }).
        when('/gallery', {
            templateUrl: 'Views/partials/_gallery.html',
        }).
        when('/gallery/:event', {
            templateUrl: 'Views/partials/_eventGallery.html',
            controller: 'galleryController',
            controllerAs: 'gc'
        }).
        otherwise({
            redirectTo: '/home'
        });

    }])

