$(document).ready(function() {
    $(".click").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
    });    

    $(".click1").click(function() {
        $("#imgs-show").slideToggle();
    });
  });

  $(document).ready(function() {
    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
    });
  
    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    });
  
    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
    });
  });
  