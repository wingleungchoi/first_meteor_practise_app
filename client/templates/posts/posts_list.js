var postsData = [
  {
    title: "Introducing Telecsope",
    url: "http://wikipedia.com/telephe"
  },
  {
    title: "Ruby on Rails",
    url: "http://rubyonrails.org"
  },
  {
    title: "Meteor",
    url: "http://meteor.com"
  }
];
Template.postsList.helpers({
  posts: postsData
});