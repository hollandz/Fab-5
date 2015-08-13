

$(document).foundation();

var links = [];
var pad = '00';
var str = "";
var ans; 
for (var i = 1; i < 100; i++){
    str = "" + i;
    ans = pad.substring(0, pad.length - str.length) + str;
    links.push("//fab5.blob.core.windows.net/images/Standing%20Ovation/" + ans + ".jpg");
}

blueimp.Gallery(shuffle(links),
{
    container: '#blueimp-gallery-carousel',
    carousel: true
}
);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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