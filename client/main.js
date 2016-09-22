import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
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
    data.createdAt = event.target.date.value;
    data.author = event.target.author.value;
    Meteor.call('addNews',data);
    event.target.title.value = "";
    event.target.title.value = "";
    event.target.title.value = "";
    FlowRouter.go('/');
    return false;
  }
});

Template.templayout.events({
  'click .latest':function (event) {
  var params = {"sortType": "createdAt"};
    FlowRouter.go('latest',{sortType: "createdAt"});
  },
  'click .discussed':function (event) {
    FlowRouter.go('latest',{sortType: "commentsCount"});
  },
  'click .liked':function (event) {
    FlowRouter.go('latest',{sortType: "votesCount"});
  }
});

Template.newsList.helpers({
  checkPermission : function () {
    var user = Meteor.user();
    if (user) {
      if( user.username === this.author)
      return true;
      else {
        return false;
      }
    }
  },
  checkVote : function () {
    var user = Meteor.user();
    let votes = this.votes;
    var count = 0;
    if(votes){
      var count = votes.filter(function (vote) {
        return vote === user._id;
      }).length;
    }
    if (count) {
      return "votelike";
    }
    else {
      return "vote";
    }
  }
});

Template.templayout.helpers({
  news : function () {
    var sortType = FlowRouter.getParam("sortType");
    var query ={};
    query[sortType] = -1;
    if (sortType) {
      return News.find({},{sort:query});
    }
    else {
    return News.find({},{sort:{createdAt:-1}});
    }
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
  },
  'click .vote' : function () {
    let user = Meteor.user();
    Meteor.call('likeNews',this._id,user);
  }
});
Accounts.ui.config({
  passwordSignupFields:"USERNAME_ONLY"
});
