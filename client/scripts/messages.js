var Messages = {

  store: function (text) {
    var message = {
      username: App.username,
      text,
      roomname: 'lobby' // Replace this later with user selected roomname
    };

    Parse.create(message, result => {
      console.log('successfully saved my message');
    });
  },

  renderInitialMsg: function (data) {
    
  }
};