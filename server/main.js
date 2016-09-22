import { Meteor } from 'meteor/meteor';

import '../collections/news.js'

Meteor.startup(() => {
  // code to run on server at startup

  if (News.find().count() === 0) {

    // create sample news
    var sampleNews = [
      {
        title: 'Live: Bengaluru, Mysuru come to standstill',
        url: 'http://www.thehindu.com/news/national/karnataka/live-karnataka-braces-itself-for-a-total-bandh/article9086561.ece',
        desc:'TO DO working on fetching this directly from link',
        createdAt: "22-09-2016",
        author: 'admin'
      },
      {
        title: 'Arvind Kejriwal escapes unhurt as car meets minor accident',
        url: 'http://timesofindia.indiatimes.com/india/Arvind-Kejriwal-escapes-unhurt-as-car-meets-minor-accident/articleshow/54224921.cms',
        desc:'TO DO working on fetching this directly from link',
        createdAt: "21-09-2016",
        author : 'admin'
      },
      {
        title: 'North Korea\'s Largest Nuclear Test Sets Off Blast Bigger Than Hiroshima',
        url: 'http://www.ndtv.com/world-news/north-koreas-largest-nuclear-test-sets-off-blast-bigger-than-hiroshima-1456528',
        desc:'TO DO working on fetching this directly from link',
        createdAt: "20-09-2016",
        author: 'admin'
      }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleNews, function(item) {
      News.insert(item);
    });
  }
});

Meteor.publish("news",function(){
  return News.find();
});
