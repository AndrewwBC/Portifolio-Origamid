$('nav li a').each(function () {
  $(this).click(function (e) {
    e.preventDefault;
    $(this).toggleClass('TESTE');
  });
});

$(document).scroll(function () {
  let alturaMouse = $(window).scrollTop();
  console.log(alturaMouse);
  if (alturaMouse > 360) {
    $('.empresa').each(function () {
      $(this).addClass('animar');
      let mostrar = $(this);
    });
  }
  if (alturaMouse > 1000) {
    $('.formação').each(function () {
      $(this).addClass('animar');
      let mostrar = $(this);
    });
  }
});
