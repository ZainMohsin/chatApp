var app = angular.module("chatApp", []); 
app.controller("myCtrl",myCtrl)
	myCtrl.$inject =['$scope', '$firebaseObject']

	function myCtrl($scope, $firebaseObject) {
	var myDataRef = firebase.database().ref();

	$scope.submit = function (){
		$('#btnSubmit').click(function() {
        var u = $('#nameIpt').val();
        var m = $('#msgIpt').val();
        myDataRef.push({name: u, text: m});
        $('#msgIpt').val('');
      });
	}

	    myDataRef.on('child_added', function(snapshot) {
        var msg = snapshot.val();
        displayMsg(msg.name, msg.text);
      });

      function displayMsg(name, text) {
        $('<div />').text(text).prepend($('<em/>').text(name+': ')).appendTo('#msgList');

        $('#msgList')[0].scrollTop = $('#msgList')[0].scrollHeight;
      };

    $scope.products = ["Milk", "Bread", "Cheese"];


}