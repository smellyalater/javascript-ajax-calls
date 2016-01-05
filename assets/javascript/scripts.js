$(document).ready(function() {
  $('#getUserInfo').on('click', function() {
      $.ajax({
          type: 'GET',
          url: 'http://art-share.herokuapp.com/api/v1/users/240',
          success: function(response) {
            var userInfo = response.result;
              $('#fillInUserInfo').html('<p> User Id: ' + userInfo.id + '</p> <p> First Name: ' + userInfo.fname + '</p> <p> Last Name: ' + userInfo.lname + '</p> <p> Email: ' + userInfo.email + '</p>');
            }
        });
      $('.right.hidden').removeClass('hidden');
    });
});