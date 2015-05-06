window.intercomSettings = {
  // TODO: The current logged in user's full name
  name: "John Doe",
  // TODO: The current logged in user's email address.
  email: "john.doe@example.com",
  // TODO: The current logged in user's sign-up date as a Unix timestamp.
  created_at: 1234567890,
  app_id: "4na10aq1"
};

Tracker.autorun(function(){
  if (Meteor.user() && !Meteor.loggingIn()) {
    var intercomSettings = {
      name: Meteor.user().username,
      email: Meteor.user().emails[0].address,
      created_at: Math.round(Meteor.user().createdAt/1000),
      favorite_color: _.sample(['blue','red','green','yellow']),
      user_id: Meteor.user()._id,
      widget: {
        activator: '#Intercom',
        use_counter: true
      },      
      favorite_color: _.sample(['blue','red','green','yellow']),
      app_id: "4na10aq1"
    };
    Intercom('boot', intercomSettings);
  }
});