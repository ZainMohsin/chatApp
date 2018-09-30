let app = angular.module("chatApp", ['firebase']);
app.controller("chatApp", chatApp);


chatApp.$inject = ['$scope', '$location', '$log'];

function chatApp($scope) {
  let myDataRef = new Firebase("https://chatapp-d3f5f.firebaseio.com");

  let urlParams = new URLSearchParams(window.location.search);
  $scope.userName = urlParams.get('name');
  $scope.appName = "ChatApp";

  $scope.submit = function () {
    let m = $('#msgIpt').val();
    myDataRef.push({
      name: $scope.userName,
      text: m
    });
    $('#msgIpt').val('');
  };

  myDataRef.on('child_added', function (snapshot) {
    let msg = snapshot.val();
    displayMsg(msg.name, msg.text);
  });

  function displayMsg(name, text) {
    $('<div />').text(text).prepend($('<em/>').text(name + ': ')).appendTo('#msgList');

    $('#msgList')[0].scrollTop = $('#msgList')[0].scrollHeight;
  }




}