$(window).resize(function(){
     var height = $(this).height()
     $('.section').css('min-height', height),
     $('.fullscreen-wrapper').css('min-height', height + 40);
});

$(window).resize();

$('.showcase li a').hover(function() {
      $(this).parent().find('.hover-description').fadeIn();
}, function() {
      $(this).parent().find('.hover-description').fadeOut();
});

$(".show_menu a").click(function(e){
      $(".menu ul").toggle();
      e.preventDefault();
    });

$("#nicholas").click(function(e){
      $("#intro").css('display', 'none'),
      $("#lindeman").css('display', 'block');
      e.preventDefault();
    });

$("#lindeman .close").click(function(e){
      $("#lindeman").css('display', 'none'),
      $("#intro").css('display', 'block');
      e.preventDefault();
});

$("#graphic_design").click(function(e){
      $("#projects").css('display', 'none'),
      $("#graphic-design").css('display', 'block');
      e.preventDefault();
});

$("#graphic-design .close").click(function(e){
      $("#graphic-design").css('display', 'none'),
      $("#projects").css('display', 'block');
      e.preventDefault();
});

$("#website_design").click(function(e){
      $("#projects").css('display', 'none'),
      $("#website-design").css('display', 'block');
      e.preventDefault();
});

$("#website-design .close").click(function(e){
      $("#website-design").css('display', 'none'),
      $("#projects").css('display', 'block');
      e.preventDefault();
});


$(".fullscreen").click(function(e){
      $(".fullscreen").css('display', 'none');
      e.preventDefault();
});

$("#fullscreen_1").click(function(e){
      $("#fullscreen-1").css('display', 'block');
      e.preventDefault();
});

$("#fullscreen-1 .close").click(function(e){
      $("#fullscreen-1").css('display', 'none'),
      $("#projects").css('display', 'block');
      e.preventDefault();
});

$("#fullscreen_2").click(function(e){
      $("#fullscreen-2").css('display', 'block');
      e.preventDefault();
});

$("#fullscreen-2 .close").click(function(e){
      $("#fullscreen-2").css('display', 'none'),
      $("#projects").css('display', 'block');
      e.preventDefault();
});
