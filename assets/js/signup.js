(function () {
  var $form = $('[data-action="email-signup"]');
  var $submitButton = $form.find('[type="submit"]')
  // gross selector, im sorry
  var $contactFormMessage = $form.parent().find('[data-action="email-signup-message"]')

  $form.on('submit', function () {
    var email = $form.find('[name="email"]').val();

    // Send an event that someone attempted to sign up
    ga('send', 'event', 'email-signup', 'click', email);

    // Prevent multiple submissions
    $submitButton.attr('disabled', true);

    $.ajax({
      type: 'post',
      url: '/invite-subscribe',
      data: {
        email: email,
      },
      complete: function (xhr) {
        // jQuery only has responseJSON if it returns JSON, but sometimes JSON
        // wont be available (like server down, API connection lost, etc
        xhr.responseJSON = xhr.responseJSON || {message: "Uh oh, something went wrong!"};
        var json = xhr.responseJSON;

        if (json.message) $contactFormMessage.text(json.message);

        $submitButton.removeAttr('disabled');

        if (json.status == 'success') {
          $contactFormMessage.removeClass('error').addClass('success');
          ga('send', 'event', 'email-signup', 'success', email);
          window._fbq.push(['track', '6021299378432']);
        }
        else {
          $contactFormMessage.removeClass('success').addClass('error');
          ga('send', 'event', 'email-signup', 'error', email);
        }

        $contactFormMessage.fadeIn(250);
      }
    });
    return false;
  });
})();
