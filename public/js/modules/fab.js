angular.module('fab', ['ngRoute', 'duScroll']);
angular.module('fab')
.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    
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
})

angular.module('fab').controller('homeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.bgURL = 'img/skyline.jpg';
}]);

angular.module('fab').controller('hcController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.bgURL = 'img/skyline.jpg';
}]);

angular.module('fab').config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {

        $routeProvider.
        when('/home', {
            templateUrl: '/views/partials/_home.html',
            controller: 'homeController as home1'
        }).
        when('/events', {
            templateUrl: 'views/partials/_events.html',
        }).
        when('/events/hc', {
            templateUrl: 'views/partials/_hc.html',
            controller: 'hcController as hc'
        }).
        when('/about', {
            templateUrl: 'views/partials/_about.html',
            controller: 'homeController as home2'
        }).
        when('/hotel', {
            templateUrl: 'views/partials/_hotel.html',
            controller: 'homeController as home3'
        }).
        otherwise({
            redirectTo: '/home'
        });

    }])

