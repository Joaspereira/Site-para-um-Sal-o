const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

<script>
  const depoimentos = document.querySelectorAll('.depoimento');
  const bolinhas = document.querySelectorAll('.bolinha');
  let indexAtual = 0;

  function mostrarDepoimento(index) {
    depoimentos.forEach((dep, i) => {
      dep.classList.remove('ativo');
      bolinhas[i].classList.remove('ativa');
    });
    depoimentos[index].classList.add('ativo');
    bolinhas[index].classList.add('ativa');
  }

  function proximoDepoimento() {
    indexAtual = (indexAtual + 1) % depoimentos.length;
    mostrarDepoimento(indexAtual);
  }

  // Trocar a cada 5 segundos
  setInterval(proximoDepoimento, 5000);

  // Se quiser controle manual ao clicar nas bolinhas:
  bolinhas.forEach((bolinha, i) => {
    bolinha.addEventListener('click', () => {
      indexAtual = i;
      mostrarDepoimento(i);
    });
  });
</script>
