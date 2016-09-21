import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

 //import './main.html';
// import '../collections/news.js';
// import '../lib/methods.js'

Meteor.subscribe("news");


Accounts.ui.config({
  passwordSignupFields:"USERNAME_ONLY"
});

Template.AddNews.events({
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
    FlowRouter.go('/');
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

Template.templayout.helpers({
  news : function () {
    return News.find({},{sort:{createdAt:-1}});
  }
});

Template.comment.helpers({
  showNews : function () {
    const id = FlowRouter.getParam("newsId");
    return News.findOne({_id:id});
  }
});

Template.comment.events({
'submit .add-comments' : function (event) {
  var data = {};
  data.id=FlowRouter.getParam("newsId");;
  console.log(data.id);
  data.detail = event.target.comment.value;
  data.author = event.target.author.value;
  Meteor.call('addComment',data,function (err,result) {
    if (err) {
      console.log(err);
    }
  });
  event.target.comment.value = "";
  event.target.author.value = "";
  FlowRouter.go('/');
  return false;
}
});

Template.newsList.events({
  'click .delete' : function () {
    Meteor.call('deleteNews',this._id);
  },
  'click .comment' : function () {
    const id = this._id;
    FlowRouter.go('comment', { newsId: id });

  }
});
Accounts.ui.config({
  passwordSignupFields:"USERNAME_ONLY"
});
