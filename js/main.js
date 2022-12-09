$(function(){
  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    auto: true
  });

  var placeholders = ['Имя', 'Your Name', 'Эл. почта', 'Your E-mail', "Сообщение", "Your message"];
  

  $('input[type="text"], input[type="email"]').on('focus', function() {
    var globalPlaceholder = this.value;
    this.value = (placeholders.indexOf(this.value) != -1) ? "" : this.value;
  });



  $('textarea').on('focus', function() {
    var curValue = $(this).html();
    var newValue = (placeholders.indexOf(curValue) != -1) ? "" : $(this).html();
    $(this).html(newValue);
  });

  // $('input[type="text"]').on('blur', function() {
  //   this.value = (this.value == "") ? "Your Name" : this.value;
  // });

  // if (!(/msie [1-8]./.test(navigator.userAgent.toLowerCase())))  {
  //   $work = $('.workflow .workflow-item');
  //   $work.each(function(i) {
  //     $(this).delay(i * 500).animate({'opacity': 1,'margin-top':0, 'padding-bottom':0}, 500);
  //   });
  // }

  $work = $('.workflow .workflow-item');
  $port = $('.portfolio .article');

  $(window).scroll( function(){
   
    $work.each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        
        if( bottom_of_window > bottom_of_object ){
            $(this).delay(i * 300).animate({'opacity': 1,'margin-top':0, 'padding-bottom':0},300);
        }
    });

   

});




  


  var fulldomain = "http://" + document.domain + "/";

  var menuAsfix = function($el) {
    $el.parent('li').addClass('active').siblings('li').removeClass('active');
  };

  $('.menu li a').on('click', function() {
     menuAsfix($(this));
  });

  $('.language a').on('click', function(e) {
      e.preventDefault();
      var lang = this.href.split('/');
      lang = lang[lang.length - 1];
      var currentDomain = fulldomain + lang  + "/";
      window.location.replace(currentDomain);
  });

  $('.menu a').on('click', function(e){
      e.preventDefault();
      var id = $(this).attr('href').match( /#.+$/ )[0].substr(1);
      var offsetTop = $("a[name='"+ id + "']").offset().top;
      $('body,html').animate({scrollTop:offsetTop}, 500);
      return false;
      
  });

  var $asfix = $('.asfix');
  
  
  var points = [];

  for (i = 0, l = $asfix.length; i < l; i++) {
    // var top = Math.round($($asfix[i]).offset().top);

    points.push({
      name : $asfix[i].name,
      'top':Math.round($($asfix[i]).offset().top)
      });
  }

   // $(document).scroll(function(){
   //      var position = ($(this).scrollTop());
   //      var name = getName(points, position);
   //      menuAsfix($('.menu li a[href="#'+name+'"]'));
   //    });

   // function getName(points, position) {
   //    var name;
   //    var l = points.length;

   //      for (i=0; i<l; i++) {
   //        if(position >= points[i].top) {                       
   //          var name = points[i].name;            
   //        }          
   //      }   

   //      return name;
   // }

   $('.contact input.btn').on('click', function(e) {
      e.preventDefault();
      var uri = location.href;
      var arr = uri.split("/");

      var warningCaption = (arr.indexOf('en') != -1) ? 'Feedback option is temporary disabled. The message can be sent by e-mail to <a href="mailto:borisbrother@gmail.com">borisbrother@gmail.com</a>' : 'Функция обратной связи временно отключена. Все предложения принимаются по электронной почте <a href="mailto:borisbrother@gmail.com">borisbrother@gmail.com</a>';
      var warningTitle = (arr.indexOf('en') != -1) ? 'Temporary disabled' : 'Извините за неудобство';
      toastr.warning(warningCaption, warningTitle);
   });

   // var lng = navigator.language || navigator.userLanguage;
   // var fulldomain = "http://" + document.domain + "/";
   // var fulldomainen = fulldomain +'en/'
   // console.log(lng);
   // console.log(fulldomain);
   // console.log(location.href);
   // console.log(lng.indexOf('ru'));

   // if ( (lng.indexOf('ru') != -1 ) && (location.href != fulldomain) ) {
   //    window.location.replace(fulldomain);
   // }
   
  


  
});
