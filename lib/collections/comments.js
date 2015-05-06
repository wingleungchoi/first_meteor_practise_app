Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttibutes){
    check(this.userId, String);
    check(commentAttibutes, {
      postId: String,
      body: String
    });
    var user = Meteor.user();
    var post = Posts.findOne(commentAttibutes.postId);
    if(!post) {
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    }
    comment = _.extend(commentAttibutes, {
      userId: user._id,
      author: user._username,
      submitted: new Date()
    });

    // update the post with the number of comments
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    // create the comment, save the id
    comment._id = Comments.insert(comment);
    // now create a notiifcation, informing the user that there's been a comment
    createCommentNotification(comment);
    return comment._id;
  }
});