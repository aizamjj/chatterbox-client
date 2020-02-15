var Rooms = {

  addRoom: function(name) {
    // create empty messageview with roomname property of name
    // var empty =
    // // render the messageview
    // MessageView.render(name);
    // // call messageview with input message
    // MessageView()
    // // call parse.create
    // Parse.create()
  },

  // manipulate the data to only have unique room

  // save the unique room to the roomsview

  createOptions: function(data) {
    // condense to unique room
    const { results } = data;
    let options = results.reduce((accumulator, currentValue) => {
      let { roomname } = currentValue;

      if (!accumulator.includes(roomname)) {
        roomname ? accumulator.push(roomname) : '';
      }

      return accumulator;
    }, []);
    RoomsView.renderOptions(options);
  },

  retrieveRoomMessages: function(roomName) {
    Parse.fetch(roomName, function(results) {
      var msgs = Messages.getUsernameAndText(results);

      MessagesView.render(msgs);

    });

  }

};

