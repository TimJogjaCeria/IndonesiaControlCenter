angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $ionicLoading) {
//            $scope.show = function() {
//            $ionicLoading.show({
//                               template: 'Loading...'
//                               });
//            };
//            $scope.hide = function(){
//            $ionicLoading.hide();
//            };
            
            $http.get('http://128.199.185.100/kawalberas/indikator-vital.json').then(function(responses){
                  $scope.indikators = responses.data;
                })
            })

.controller('DashDetailCtrl', function($scope, $http, $stateParams) {
            $http.get('http://128.199.185.100/kawalberas/indikator-vital-1.json').then(function(responses){
                $scope.kementrian = 'Kementrian Perdagangan'; //ambil dari id URL
                $scope.title = 'Beras Naik 20%'; //ambil dari id URL
                $scope.indikators = responses.data;
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
