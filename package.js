Package.describe({
  summary: "Summernote WYSIWYG editor repackaged for Meteor",
  version: "0.1.0",
  git: "https://github.com/hckrs/meteor-summernote.git"
});

Package.onUse(function(api) {
  api.addFiles('summernote/dist/summernote.js', 'client');
  api.addFiles('summernote/dist/summernote.css', 'client');
  api.use('jquery@1.0.0', 'client');
  api.use('mizzao:bootstrap-3@3.2.0', 'client');
  api.use('chrismbeckett:fontawesome4@4.2.1', 'client');
});
