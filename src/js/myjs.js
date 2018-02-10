$(function() {
  cardFooter = $('.card-footer');
  cardFooterP = $('.card-footer p');
  cardFooterImg = $('.card-footer img');
  correctAnswers = ['q1-1', 'q2-2', 'q3-4', 'q4-3', 'q5-3', 'q6-2'];
  quizzComplete = 0;
  cardFooter.hide();
  $('footer').hide();

  $("#check").click(function(){

    // toutes les questions ont un choix
    $( "form input:checked" ).each(function( index ) {
      quizzComplete++;
    });
    if (quizzComplete == 6) {
      for (i= 0; i < correctAnswers.length; i++) {
        var checkTheAnswer = $('input[name=q'+(1+i)+']:checked', 'form').val();
        if (checkTheAnswer === correctAnswers[i]) {
          cardFooterP.eq(i).css("color", "green");
          cardFooterImg.eq(i).attr("src", "/img/vrai.jpg");
        } else {
          cardFooterP.eq(i).css("color", "red");
          cardFooterImg.eq(i).attr("src", "../../img/faux.jpg");
        }
      }

      // on montre les résultats et la surprise
      $('#alert p').hide();
      cardFooter.show();
      $('footer').show();
      quizzComplete = 0;
    }
    else
    {
      $('#alert p').show();
      // alert("merci de répondre à toutes les questions");
      $('#alert p').text('Attention, tu n\'as pas répondu à TOUTES les questions, petit·e rêveur·se');
      quizzComplete = 0;
    }
  });
});
