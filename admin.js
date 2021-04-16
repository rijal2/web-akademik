$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('.feat-btn').click(function(){
    $('div ul .feat-show').toggleClass("show");
});

$('.serv-btn').click(function(){
  $('div ul .serv-show').toggleClass("show1");
});