$(document).ready(function() {
var time = 0.0;
var speed = 0.5;

function draw() {
  requestAnimationFrame(draw);
  // Drawing code goes here
  scroll = scroll - $(document).scrollTop() + 1500;
  time += 0.05;
  $('.logo').css('transform', 'translateY(' + Math.sin(time * speed) * 10 + 'px)');
}
draw();

$('.spinner-container').toggleClass('spinner-container-active');

$('body').imagesLoaded({ background: true }, function() {
  // console.log('all images loaded');
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


});
