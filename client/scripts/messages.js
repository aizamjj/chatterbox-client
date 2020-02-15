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
    var {results} = data;
    var messages = results.reduce(function(accumulator, currentVal) {
      var {username, text} = currentVal;
      if (username && text) {
        accumulator.push({
          username,
          text
        });
      }

      return accumulator;
    }, []);
    MessagesView.render(messages);
  }
};