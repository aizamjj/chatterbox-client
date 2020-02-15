var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //input: no input
    //output:

  },

  render: function(messages) {
    var html = '';
    // clear the Chat Room
    MessagesView.$chats.empty();
    messages.forEach(element => {
      html += MessageView.render(element);
    });

    MessagesView.$chats.append(html);

  }

};