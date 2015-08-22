angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Menteri Perdagangan',
    lastText: 'Siap laksanakan!',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Menteri Pertanian',
    lastText: 'Target sedang diperjuangkan (y)',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Menteri Kelautan dan Perikanan',
    lastText: 'Next ship, Sir? :)',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Ainun Najib',
    lastText: 'Code4Nation sudah siap Pak :)',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  },];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
