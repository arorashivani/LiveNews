Schema = {};
Schema.User = new SimpleSchema({
  username:{
    type: String},
  createdAt:{
    type: Date},
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
  });
  Meteor.users.attachSchema(Schema.User);
