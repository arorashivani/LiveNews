News = new Mongo.Collection("news");

Comment = new SimpleSchema({
    detail:{
      type:String,
      label:"Comment"
    },
    author:{
      //type:SimpleSchema.User,
      type:String,
      label:"Author",
      autoValue:function () {
    //    return Meteor.user().username;
      },
      autoform:{
        type:"hidden"
      }
    }
});

NewSchema = new SimpleSchema({
  title:{
    type:String,
    label:"Name"
  },
  url: {
      type: String,
      label: "URL",
      autoform: {
         type: "url"
      }
   },
  desc:{
    type:String,
    label:"Description"
  },
  author:{
    //type:SimpleSchema.User,
    type:String,
    label:"Author",
    autoValue:function () {
    //  return Meteor.user().username;
    },
    autoform:{
      type:"hidden"
    }
  },
  createdAt:{
    type : Date,
    label:"Created At"
  },
  comments:{
    type:[Comment],
    optional:true
  },
  votes:{
    type: [String],
    optional:true
  },
  votesCount:{
    type: SimpleSchema.Integer,
    min: 0,
    optional:true
  },
  commentsCount:{
    type: SimpleSchema.Integer,
    min: 0,
    optional:true
  }
});
News.attachSchema(NewSchema)
