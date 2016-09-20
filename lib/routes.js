
FlowRouter.route('/abc',{
name:'home',
action(){
//  GAnalysics.pageview();

  BlazeLayout.render('newsList');
}
});



FlowRouter.route('/update',{
name:'update',
action(){
  //GAnalysics.pageview();
  BlazeLayout.render('UpdateLayout');
}
});
