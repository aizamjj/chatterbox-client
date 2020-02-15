var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // attach an event to jQuery node so that when we click on it it will prompt the user for new room
    RoomsView.$button.on('click', RoomsView.handleAddRoom);

  },

  render: function() {

  },

  handleAddRoom: function() {
    //create a variable called userPrompt and assign to prompt function
    var newRoom = prompt('Name of the room?');
    // call rooms and pass in userPrompt
    Rooms.addRoom(newRoom);
  }

};
