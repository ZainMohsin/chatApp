var app = angular.module("chatApp", ['firebase']); 
app.controller("myCtrl",myCtrl)
	myCtrl.$inject =['$scope']

	function myCtrl($scope) {
var myDataRef = new Firebase("https://chatapp-d3f5f.firebaseio.com");

	$scope.submit = function (){

        var u = $('#nameIpt').val();
        var m = $('#msgIpt').val();
        myDataRef.push({name: u, text: m});
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