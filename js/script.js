console.log('js');

$(document).ready(function(){
  // brown
  $('.brown').click(function(){

    $('body')
    .css('background','brown')

    .append('<h1 id="brown" class="display-1 mt-5 text-light text-center">Parauri</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#brown').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.brown').text('Parauri')
  });


  // purple
  $('.purple').click(function(){

    $('body')
    .css('background','purple')

    .append('<h1 id="purple" class="display-1 mt-5 text-light text-center">Tawa</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#purple').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.purple').text('Tawa');
  });

  // Orange
  $('.orange').click(function(){

    $('body')
    .css('background','orange')

    .append('<h1 id="orange" class="display-1 mt-5 text-light text-center">Karaka</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#orange').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.orange').text('Karaka');
  });
});
