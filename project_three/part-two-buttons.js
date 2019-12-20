$(document).ready(function() {
  $('#home-next').click(function() {
    $(".sect-1").addClass("visible");
    $(".home").removeClass("visible");
  });
  $('#sect1-next').click(function() {
    $(".sect-1").removeClass("visible");
    $(".sect-2").addClass("visible");
  });
  $('#sect1-back').click(function() {
    $(".sect-1").removeClass("visible");
    $(".home").addClass("visible");
  });
  $('#sect2-back').click(function() {
    $(".sect-2").removeClass("visible");
    $(".sect-1").addClass("visible");
  });
    $('#sect2-next').click(function() {
    $(".sect-2").removeClass("visible");
    $(".sect-3").addClass("visible");
  });
    $('#sect3-back').click(function() {
    $(".sect-3").removeClass("visible");
    $(".sect-2").addClass("visible");
  });
    $('#sect3-next').click(function() {
    $(".sect-3").removeClass("visible");
    $(".sect-50").addClass("visible");
 });
    $('#sect50-back').click(function() {
    $(".sect-50").removeClass("visible");
    $(".sect-3").addClass("visible");
});
$('#sect50-next').click(function() {
    $(".sect-50").removeClass("visible");
    $(".sect-51").addClass("visible");
 });
    $('#sect51-back').click(function() {
    $(".sect-51").removeClass("visible");
    $(".sect-50").addClass("visible");
});
$('#sect51-next').click(function() {
    $(".sect-51").removeClass("visible");
    $(".sect-52").addClass("visible");
 });
    $('#sect52-back').click(function() {
    $(".sect-52").removeClass("visible");
    $(".sect-51").addClass("visible");
});
    $('#sect52-next').click(function() {
    $(".sect-52").removeClass("visible");
    $(".sect-53").addClass("visible");
 });
    $('#sect53-back').click(function() {
    $(".sect-53").removeClass("visible");
    $(".sect-52").addClass("visible");
});
});