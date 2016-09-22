
Meteor.methods({
  addNews : function(data) {
    News.insert({
      title: data.title,
      url : data.url,
      desc:data.description,
      author : data.author ,
      createdAt: new Date()
    });
  },
  deleteNews : function (id) {
    News.remove({_id:id});
  },
  addComment : function (data) {
    News.update({_id:data.id},{$push:{comments:
      {detail:data.detail,author:data.author}}
      ,$inc:{commentsCount:1}});
  },
  likeNews : function (data,user) {
    News.update({_id:data},{$push:{votes:user._id},
      $inc:{votesCount:1}});
  }
});
