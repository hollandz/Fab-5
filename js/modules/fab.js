angular.module('fab', ['ngRoute', 'duScroll']);
angular.module('fab')
.controller('ContactController', ['$scope', function ($scope) {
    $scope.success = false;
    $scope.error = false;

    $scope.send = function () {
      
      var reqPromise = $http.post('/email', {user: $scope.user});
      
      reqPromise.success(function(data, status, headers, config) {
        console.log(data);
        $scope.success = true;
        $scope.user = {};
        $scope.contactForm.$setPristine();
        $scope.$digest();
      });
      
      reqPromise.error(function(data, status, headers, config) {
        console.log(data);
        $scope.error = true;
      });
      
        
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
});

angular.module('fab').controller('homeController', ['$scope', '$rootScope', '$document', function ($scope, $rootScope, $document) {
    $rootScope.bgURL = 'img/skyline.jpg';

    $scope.scrollToBottom = function () {
        var someElement = angular.element(document.getElementById('contact'));
        $document.scrollToElementAnimated(someElement);
    }

}]);

angular.module('fab').controller('hcController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.bgURL = 'img/skyline.jpg';
}]);

angular.module('fab').controller('galleryController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

    // $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
    //     debugger;
    //     $(".spinner").hide();
    //     $(".thumbs").fadeIn();
    // });

    $scope.event = $routeParams.event;

    console.log($scope.event);

    //TO-DO request img array from node server instead of this :)

        switch($scope.event) {
            case "brunch": $scope.limit = 49;
                break;
            case "dayjavu": $scope.limit = 72;
                break;
             case "hc2015": $scope.limit = 710;
                break;
             case "socialnetwork": $scope.limit = 10;
                break;
            case "guestlist": $scope.limit = 98;        
                break;
            case "standingovation": $scope.limit = 99;        
                break;
            default: $scope.limit = 0;
        }

        $scope.links = [];
        
        for (var i = 1; i <= $scope.limit; i++) {
            $scope.links.push(i);
        }
}]);

angular.module('fab').config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.
        when('/home', {
            templateUrl: 'Views/partials/_home.html',
            controller: 'homeController'
        }).
        when('/events', {
            templateUrl: 'Views/partials/_events.html',
        })

        /*.
        when('/events/hc', {
            templateUrl: 'Views/partials/_hc.html',
            controller: 'hcController as hc'
        })*/

        .
        when('/about', {
            templateUrl: 'Views/partials/_about.html',
            controller: 'homeController'
        })

        /*.
        when('/hotel', {
            templateUrl: 'Views/partials/_hotel.html',
            controller: 'homeController as home3'
        })*/

        .
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

