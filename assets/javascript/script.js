document.addEventListener('DOMContentLoaded', function() {
  
    var scrollLinks = document.querySelectorAll('.scroll');
  
    // Adiciona um evento de clique a cada elemento
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  