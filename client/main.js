import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

 import './main.html';
// import '../collections/news.js';
// import '../lib/methods.js'

Meteor.subscribe("news");

Template.body.helpers({
  news : function () {
    return News.find({},{sort:{createdAt:-1}});
  }
});


Template.body.events({
  'submit .add-news':function (event) {
    var data = {};

    data.title = event.target.title.value;
    data.url = event.target.link.value;
    data.description = event.target.description.value;
    data.author = event.target.author.value;
    Meteor.call('addNews',data);
    event.target.title.value = "";
    event.target.title.link = "";
    event.target.title.description = "";
    return false;
  }
});

Template.newsList.helpers({
  checkPermission : function () {

    var user = Meteor.user();

    if( user.username === this.author)
    return true;
    else {
    return false;
    }
  }
});
Template.newsList.events({
  'click .delete' : function () {
    Meteor.call('deleteNews',this._id);
  }
});
Accounts.ui.config({
  passwordSignupFields:"USERNAME_ONLY"
});
