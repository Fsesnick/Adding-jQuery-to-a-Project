$('.spoiler').on('click', 'button', function(){
 //mostra o texto do spoiler 
  $(this).prev().show();
  //esconder o botão
  $(this).hide(); 
});

//criar o botão Reveal Spoiler
const $button = $('<button>Reveal Spoiler</button>');

//anexar à página web.
$('.spoiler').append($button);

// ocultar o spoiler no carregamento da página
$('.spoiler span').hide();




