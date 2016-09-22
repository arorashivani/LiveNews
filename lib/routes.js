
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
  BlazeLayout.render('MainLayout',{main:'templayout'});

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
  if(!Meteor.userId()){
      FlowRouter.go('guest');
  }
  BlazeLayout.render('MainLayout',{main:'comment'});
}
});

FlowRouter.route('/latest/:sortType',{
name:'latest',
action(params){
  BlazeLayout.render('MainLayout',{main:'templayout'});
}
});

FlowRouter.route('/discussed/:sortType',{
name:'discussed',
action(params){
  BlazeLayout.render('MainLayout',{main:'templayout'});
}
});
FlowRouter.route('/liked/:sortType',{
name:'liked',
action(params){
  BlazeLayout.render('MainLayout',{main:'templayout'});
}
});
