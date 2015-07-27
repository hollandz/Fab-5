

$(document).foundation();

var parent = $("#links");
var links = parent.children();
while (links.length) {
    parent.append(links.splice(Math.floor(Math.random() * links.length), 1)[0]);
}

blueimp.Gallery(document.getElementById('links').getElementsByTagName('a'),
{
    container: '#blueimp-gallery-carousel',
    carousel: true
}
);

angular.module('fab', []);
angular.module('fab')
    .controller('ContactController', ['$scope', '$http', function ($scope, $http) {
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
                    'to': 'zaphane.holland@gmail.com',
                    'toname': 'Work email',
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