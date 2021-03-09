//John Barger
$(document).ready(function(){
  //loop through the 6 divs. Hide the color versions. Apply colorFade function.
  for(i=0;i<=6;i++){
    $('.c' + i + '_color').hide();
    colorFade('c' + i, 400);
  }

  //requires divs with class naming scheme: 'x'_hover_box, 'x'_color, 'x'_duotone. Where x is div number and s is speed of hover.
  function colorFade(x,s){
    var $duotone = $('.' + x + '_duotone');
    var $color = $('.' + x + '_color');

    $(function() {
      $('.' + x + '_hover_box').hover(function() {
        //Hover-On: Stop current animation, fade in color, and fade out duotone.
        $duotone.stop();
        $color.stop();
        $color.fadeIn(s);
        $duotone.fadeOut(s);
      }, function() {
        //Hover off: Stop current animation, fade in duotone, and fade out color.
        $duotone.stop();
        $color.stop();
        $color.fadeOut(s);
        $duotone.fadeIn(s);
      });
    });
  }

});
