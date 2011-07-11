function initialize_all() {
  Updater.initialize();
  Ui.initialize();
  Messages.initialize();
  Auth.initialize();
};

$(document).ready(function() {
  initialize_all();
});
