Template.homeLoggedOut.onCreated(function(){
  var title = "CodeBuddies | Home";
  var metaInfo = {name: "description", content: "We're a community of people learning to code via peer-to-peer Google Hangouts. Learning with others helps us learn faster. The project is free and open-sourced."};
  DocHead.setTitle(title);
  DocHead.addMeta(metaInfo);
});

 Template.homeLoggedOut.rendered = function() {

 $('#hangout-tips').click(function() {
    Modal.show('hangoutTips');
  });

  $('.join-info').click(function() {
    Modal.show('joinInfo');
  });


};