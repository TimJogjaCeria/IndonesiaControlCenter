angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
            $http.get('http://128.199.185.100/kawalberas/indikator-vital.json').then(function(resp) {
                                                                                     console.log('Success', resp);
                                                                                     $scope.tasks = responses;
                                                                                     // For JSON responses, resp.data contains the result
                                                                                     }, function(err) {
                                                                                     console.error('ERR', err);
                                                                                     // err.status will contain the status code
                                                                                     })
            })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
