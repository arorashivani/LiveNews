import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../collections/news.js'

Template.body.helpers({
  news : function () {
    return News.find();
  }
  // TO DO permission for selected delete
});
Template.body.events({
  'submit .add-news':function (event) {
    var title = event.target.title.value;
    var link = event.target.link.value;
    var description = event.target.description.value;
    var author = event.target.author.value;
    News.insert({
      title: title,
      link : link,
      description:description,
      author : author ,
      createdAt: new Date()
    });
    event.target.title.value = "";
    event.target.title.link = "";
    event.target.title.description = "";
    return false;
  }
});

Template.newsList.events({
  'click .delete' : function () {
    News.remove(this._id);
  }
});
Accounts.ui.config({
  passwordSignupFields:"USERNAME_ONLY"
});
