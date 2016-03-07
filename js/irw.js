$(document).ready(function() {

//logo
var time = 0.0;
var speed = 0.5;
function draw() {
  requestAnimationFrame(draw);
  scroll = scroll - $(document).scrollTop() + 1500;
  time += 0.05;
  $('.logo').css('transform', 'translateY(' + Math.sin(time * speed) * 10 + 'px)');
}
draw();


//preloader
$('.spinner-container').toggleClass('spinner-container-active');
$('body').imagesLoaded({ background: true }, function() {
  $('#headerArt').imagesLoaded({ background: true }, function() {
      setTimeout(function(){
        $("#loader").css('opacity', '0');
        $('.spinner-container').toggleClass('spinner-container-active');
      }, 500);
      setTimeout(function(){
        $("#loader").css('display', 'none');
      }, 2300);
  });
});


//spritesheets
$(".moving-car").animateSprite({
    fps: 18,
    animations: {
        drive: [0, 1, 2]
    },
    loop: true,
});

$(".moving-bot").animateSprite({
    fps: 10,
    animations: {
        drive: [0, 1]
    },
    loop: true,
});


//video
var vidWidth = $('#trailer-frame').width();
$('#trailer-frame').css('height', vidWidth * 0.5625 + 'px');
$( window ).resize(function() {
  vidWidth = $('#trailer-frame').width();
  $('#trailer-frame').css('height', vidWidth * 0.5625 + 'px');
});


//end
});
