
FlowRouter.route('/',{
name:'home',
action(){
//  GAnalysics.pageview();

  BlazeLayout.render('MainLayout',{main:'templayout'});
}
});

FlowRouter.route('/guest',{
name:'guest',
action(){
  //GAnalysics.pageview();
  if(!Meteor.userId()){
      BlazeLayout.render('MainLayout',{main:'CreateUser'});
  }

}
});

FlowRouter.route('/addNews',{
name:'addNews',
action(){
  //GAnalysics.pageview();
  if(!Meteor.userId()){
      FlowRouter.go('guest');
  }
  BlazeLayout.render('MainLayout',{main:'AddNews'});
}
});

FlowRouter.route('/comment/:newsId',{
name:'comment',
action(params){
  BlazeLayout.render('MainLayout',{main:'comment'});
}
});

FlowRouter.route('/update',{
name:'update',
action(){
  //GAnalysics.pageview();
  BlazeLayout.render('UpdateLayout');
}
});
