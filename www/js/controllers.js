angular.module('starter.controllers', ['firebase'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('ConnectionStatusCtrl', function($scope) {
  // connection status detection
  $scope.connected = false;
  var connectedRef = new Firebase("https://codeaholics-072015.firebaseio.com/.info/connected");
  connectedRef.on("value", function(snap) {
    $scope.$apply(function() {
      $scope.connected = snap.val();
    });
  });
})

.controller('PlaylistsCtrl', function($scope, $firebaseArray) {
  // 1. add playlist, both updated
  // 2. offline and add, then online again, both updated
  var playlistsRef = new Firebase("https://codeaholics-072015.firebaseio.com/playlists");
  $scope.playlists = $firebaseArray(playlistsRef);

  $scope.addPlaylist = function() {
    $scope.playlists.$add({
      title: "New Playlist"
    });
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
