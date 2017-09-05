var app = angular.module("chatApp", ['firebase']); 
app.controller("myCtrl",myCtrl);


myCtrl.$inject =['$scope', '$location', '$log'];

	function myCtrl($scope, $location, $log) {
  var myDataRef = new Firebase("https://chatapp-d3f5f.firebaseio.com");
  $scope.userName = $location.search().name;
  $scope.appName = "ChatApp";
	$scope.submit = function (){

        var m = $('#msgIpt').val();
        myDataRef.push({name: $scope.userName, text: m});
        $('#msgIpt').val('');
	}

	    myDataRef.on('child_added', function(snapshot) {
        var msg = snapshot.val();
        displayMsg(msg.name, msg.text);
      });

      function displayMsg(name, text) {
        $('<div />').text(text).prepend($('<em/>').text(name+': ')).appendTo('#msgList');

        $('#msgList')[0].scrollTop = $('#msgList')[0].scrollHeight;
      };




}