
Meteor.methods({
  addNews : function(data) {
    News.insert({
      title: data.title,
      link : data.link,
      description:data.description,
      author : data.author ,
      createdAt: new Date()
    });
  },
  deleteNews : function (id) {
    News.remove(id);
  }
});
