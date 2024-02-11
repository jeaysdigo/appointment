
$(document).ready(function(){
  let noButtonClickCount = 0;

  $("#btn-no").click(function(){
      noButtonClickCount++;
      if (noButtonClickCount === 1) {
          $("#gif-no").removeClass("d-none");
          $("#gif-yes").addClass("d-none");
          $("#btn-no").text("Tifa will cry...");
      }
      else if (noButtonClickCount === 2) {
          $("#btn-no").text("Tifa will be sad...");
          $("#gif-no").attr('src', 'https://64.media.tumblr.com/ef5fb087ae9b53e2bb98e398b6250077/tumblr_inline_o222a694cH1r8a94o_400.gifv');
      }
      else if (noButtonClickCount === 3) {
          $("#btn-no").text("Are you sure??? Im dead");
          $("#gif-no").attr('src', 'https://64.media.tumblr.com/c49abd81d3f72e1e86fbd439074d4cd4/271a8cb8d097d6b5-f7/s540x810/a6fdb1a1cbd3394a41f8a10483b561b54982c792.gif');
      }
  });

  $("#btn-yes").click(function(){
      $("#gif-no").addClass("d-none");
      $("#gif-yes").removeClass("d-none").attr('src', 'https://media1.tenor.com/m/Z9bvuMVuawYAAAAd/tifa-lockhart.gif');
      $(".h1").text("Yeyyy!!!");
      $("#btn-no").addClass("d-none");
      $("#btn-yes").addClass("d-none");
      noButtonClickCount = 0;
  });
});

$(window).on("load", function() {
  $(".loading-overlay").fadeOut(1000);
  $(".content").fadeIn("slow");
});

//confetti js
const duration = 15 * 1000,
animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
return Math.random() * (max - min) + min;
}

(function frame() {
const timeLeft = animationEnd - Date.now(),
  ticks = Math.max(200, 500 * (timeLeft / duration));

skew = Math.max(0.8, skew - 0.001);

confetti({
  particleCount: 5,
  startVelocity: 0,
  ticks: ticks,
  origin: {
    x: Math.random(),
    y: Math.random() * skew - 0.2,
  },
  colors: ["#ff0000"],
  shapes: ["circle"],
  gravity: randomInRange(0.4, 0.6),
  scalar: randomInRange(0.4, 1),
  drift: randomInRange(-0.4, 0.4),
});

if (timeLeft > 0) {
  requestAnimationFrame(frame);
}
})();

