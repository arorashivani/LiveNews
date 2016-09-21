
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
    News.update({_id:data.id},{$push:{comments:{detail:data.detail,author:data.author}}});
  }
});
