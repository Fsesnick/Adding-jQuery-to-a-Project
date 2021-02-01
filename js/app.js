
//criar o botão Reveal Spoiler
const $button = $('<button>Reveal Spoiler</button>');

//anexar à página web.
//$('.spoiler').append($button);
$('.spoiler').prepend($button);

// ocultar o spoiler no carregamento da página
$('.spoiler span').hide();
// quando o botão é pressionado,
$('.spoiler button').on('click mouseleave', function(){
  //mostra o texto do spoiler 
  $('.spoiler span').show();
  //esconder o botão
  $('.spoiler button').hide();
});




