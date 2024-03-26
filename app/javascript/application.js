//= require semantic-ui

// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import * as jquery from "jquery"
import "semantic-ui"
import "controllers"
import "channels"

$(document).on('turbo:load', function() {
    $('.ui.dropdown').dropdown()

    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
});

scroll_bottom = function() {
  if($('#messages').length > 0){
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

submit_message = function() {
  $('messages_body').on("keydown", function(e) {
    if(e.key == 13) {
      $('button').click();
      e.target.value = "";
    }
  });
}