
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
  }
});
