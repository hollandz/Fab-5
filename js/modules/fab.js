angular.module('fab', ['ngRoute', 'duScroll']);
angular.module('fab')
.controller('ContactController', ['$scope', function ($scope) {
    $scope.success = false;
    $scope.error = false;

    $scope.send = function () {

        var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
        '<div>Email: ' + $scope.user.email + '</div>' +
        '<div>Message: ' + $scope.user.body + '</div>' +
        '<div>Date: ' + (new Date()).toString() + '</div>';

        $.ajax({
            url: 'https://api.sendgrid.com/api/mail.send.json',
            type: 'GET',
            timeout: 5000,
            data: {
                'api_user': 'azure_26671fad870f47d3458dc77dede74dd5@azure.com',
                'api_key': '8Ia5zRY04Ow9re9',
                'to': 'fab5gbe@gmail.com',
                'toname': 'Fab 5 GBE',
                'subject': 'New Contact Form Submission',
                'from': $scope.user.email,
                'text': $scope.user.body
            },
            dataType: 'jsonp',
            error: function (x, t, m) {
                debugger;
                if (t === "timeout") {
                    $scope.error = true;
                } else if (t == "parsererror") {
                    $scope.success = true;
                    $scope.user = {};
                    $scope.contactForm.$setPristine();
                    $scope.$digest();
                }
            }
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
        otherwise({
            redirectTo: '/home'
        });

    }])

