$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('.feat-btn').click(function(){
    $('div ul .feat-show').toggleClass("show");
    $('div ul .first').toggleClass("rotate");
});

$('.serv-btn').click(function(){
  $('div ul .serv-show').toggleClass("show1");
  $('div ul .second').toggleClass("rotate");
});