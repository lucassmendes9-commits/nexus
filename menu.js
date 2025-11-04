// Seleciona todos os itens do menu
var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
  menuItem.forEach((item) =>
    item.classList.remove('ativo')
  );
  this.classList.add('ativo'); // agora aplica a classe corretamente
}

// Adiciona o evento de clique em cada item
menuItem.forEach((item) =>
  item.addEventListener('click', selectLink)
);

// Botão de expandir menu
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
  menuSide.classList.toggle('expandir');
});
