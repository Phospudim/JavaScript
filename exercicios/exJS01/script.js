let botoes = document.querySelectorAll('.botao');
let textos = document.querySelectorAll('.texto');

botoes.forEach(function(botao, index) {
    botao.addEventListener('click', function() {
        let texto = botao.querySelector('.texto');
        texto.style.display = texto.style.display === 'none' ? 'block' : 'none';
    });
});
