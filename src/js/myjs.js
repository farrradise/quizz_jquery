$(function() {
  cardFooter = $('.card-footer');
  cardFooterP = $('.card-footer p');
  cardFooterImg = $('.card-footer img');
  cardFooter.hide();
  $('footer').hide();

  correctAnswers = ['q1-1', 'q2-2', 'q3-4', 'q4-3', 'q5-3', 'q6-2'];
  // userAnswers = $("form input[type=radio]").is(":checked");
  $("#check").click(function(){
    for (i= 0; i < correctAnswers.length; i++) {
      var checkTheAnswer = $('input[name=q'+(1+i)+']:checked', 'form').val();
      if (checkTheAnswer === correctAnswers[i]) {
        cardFooterP.eq(i).css("color", "green");
        cardFooterImg.eq(i).attr("src", "../img/vrai.jpg");
      } else {
        cardFooterP.eq(i).css("color", "red");
        cardFooterImg.eq(i).attr("src", "../img/faux.jpg");
      }
    }

    cardFooter.show();
    $('footer').show();
      // alert($('.card-footer p').eq(2).html());
        // alert(cardFooter.eq(2).html());
  });
});
