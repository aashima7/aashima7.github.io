$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".after-click").hide();
    $(".after-click-2").hide();
    $("#minus-btn").hide();
    $("#sub-menu").hide();
    $("#minus-link").hide();
  });

  $(function() {
    $('.eq_1').matchHeight({
        byRow: false,
    });
});

$("#yes").click(function(){
  $(".after-click").show();
  $(".before-click").hide();

});
$("#no").click(function(){
  $(".after-click-2").show();
  $(".before-click").hide();

});
$("#drop-open-btn").click(function(){
  $("#drop-close-btn").show();
  $("#drop-open-btn").hide();
  $(".side-menu").show();

});
$("#drop-close-btn").click(function(){
  $("#drop-open-btn").show();
  $("#drop-close-btn").hide();
  $(".side-menu").hide();

});
$("#plus-btn").click(function(){
  $("#plus-btn").hide();
  $("#minus-btn").show();
  $("#sub-menu").show();
  $("#minus-link").show();
  $("#plus-link").hide();

});
$("#minus-btn").click(function(){
  $("#plus-btn").show();  
  $("#minus-btn").hide();
  $("#sub-menu").hide();
  $("#minus-link").hide();
  $("#plus-link").show();
});
