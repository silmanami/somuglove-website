/* Hamburger Menu*/

$('.header_menu ul').origamidMenu({
	breakpoint: 767,
	top: 50,
	background: "#ecb7a7",
	color: "#ffffff"
});

/* Responsive Slides Animation*/

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

/* Visibility Animation*/

Visibility.onVisible(function(){
  setTimeout(function() {
    $(".introducao h1").addClass("animated fadeInDown");
  },400);
  setTimeout(function() {
    $(".introducao blockquote").addClass("animated fadeInDown");
  },800);
  setTimeout(function() {
    $(".introducao .btn").addClass("animated fadeInDown");
  },1200);
  setTimeout(function() {
    $(".animar").addClass("animated fadeInDown");
  },1600);

  setTimeout(function() {
    $(".introducao_interna h1").addClass("animated fadeInDown");
  },400);
  setTimeout(function() {
    $(".introducao_interna p").addClass("animated fadeInDown");
  },800);
  setTimeout(function() {
    $(".animar_interno").addClass("animated fadeInDown");
  },1200);
});


/* Contact Form*/

$('.formphp').on('submit', function() {
  var emailContato = "contato@bikcraft.com"; //Put your e-mail here
  var that = $(this),
      url = that.attr('action'),
      type = that.attr('method'),
      data = {};

  that.find('[name]').each(function(index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();

    data[name] = value;
  });

  $.ajax({
    url: url,
    type: type,
    data: data,

    success: function(response) {

      if( $('[name="leaveblank"]').val().length != 0 ) {
        $('.formphp').html("<div id='form-erro'></div>");
        $('#form-erro').html("<span>Failed to send your message</span><p>Try again, or send e-mail to " + emailContato + " </p>")
          .hide()
          .fadeIn(1500, function() {
          $('#form-erro');
        });

      } else {
        $('.formphp').html("<div id='form-send'></div>");
        $('#form-send').html("<span>Thank you for getting in touch!</span><p> We will get back to you soon.</p>")
          .hide()
          .fadeIn(1500, function() {
          $('#form-send');
        });
      };
    },

    error: function(response) {

      $('.formphp').html("<div id='form-erro'></div>");
      $('#form-erro').html("<span>Failed to send your message</span><p>Try again, or send e-mail to " + emailContato + " </p>")
        .hide()
		.fadeIn(1500, function() {
        $('#form-erro');
      });
    }
  });

  return false;
});
