// ocultar o spoiler no carregamento da página
$('.spoiler span').hide();
// quando o botão é pressionado,
$('.spoiler button').click(function(){
  //mostra o texto do spoiler 
  $('.spoiler span').show();
  //esconder o botão
  $('.spoiler button').hide();
});




