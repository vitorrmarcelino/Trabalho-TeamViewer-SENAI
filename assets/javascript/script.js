document.addEventListener('DOMContentLoaded', function() {
  // Aguarda o carregamento completo da página antes de executar o código

  var scrollLinks = document.querySelectorAll('.scroll');
  // Seleciona todos os elementos com a classe 'scroll' e os armazena em uma lista

  // Adiciona um evento de clique a cada elemento da lista
  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Captura o evento de clique em cada elemento

      e.preventDefault();
      // Prevenção do comportamento padrão do evento de clique, que é seguir o link e recarregar a página

      var target = document.querySelector(link.getAttribute('href'));
      // Obtém o valor do atributo 'href' do elemento clicado e encontra o elemento correspondente na página

      target.scrollIntoView({ behavior: 'smooth' });
      // Faz com que a página role suavemente até o elemento alvo encontrado, usando um comportamento de rolagem suave
    });
  });
});