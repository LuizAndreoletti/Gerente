const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('change', () => {
      nav.classList.toggle('active', menuToggle.checked);
    });

    const chamadoForm = document.getElementById('chamado-form');

    chamadoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Aqui você pode adicionar a lógica para processar o formulário
      // Por exemplo, enviar os dados para um servidor ou realizar outras ações.
    });

    const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
