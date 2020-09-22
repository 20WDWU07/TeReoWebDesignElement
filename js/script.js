console.log('js');

$(document).ready(function(){
  // brown
  $('.brown').click(function(){

    $('body')
    // .css('background','brown')
    .css('background','url("images/brown.jpeg")')
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

    .append('<h1 id="purple" class="display-1 mt-5 text-light text-center">Tawa</h1>')
    .append('<img id="Lavender" src="images/purple.jpeg" alt="Lavender" style="width: 500px; display: block; margin:auto;" >');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#purple, #Lavender').fadeOut();// or fade, css display however you'd like.

    }, 5000);

    $('.purple').text('Tawa');
  });

  // Orange
  $('.orange').click(function(){

    $('body')
    // .css('background','orange')
    .css('background','url("images/orange.jpeg")').css('color','orange')
    .append('<h1 id="orange" class="jumbotron display-1 mt-5 orange text-light text-center">Karaka</h1>');

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
