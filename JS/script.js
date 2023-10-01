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

/*-------chamado-----*/
const saveBtn = document.getElementById('registrar');
const cancelBtn = document.getElementById('cancel-btn');
const firstNameInput = document.getElementById('nome');
const lastNameInput = document.getElementById('sobrenome');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
const errorMsg = document.getElementById('error-msg');

saveBtn.addEventListener('click', () => {
  editBtn.classList.remove('hide');
  saveBtn.classList.add('hide');
  cancelBtn.classList.add('hide');
  firstNameInput.disabled = true;
  lastNameInput.disabled = true;
  emailInput.disabled = true;
  passwordInput.disabled = true;
  errorMsg.classList.add('hide');
});

$("#registrar").click(function(){
  $("p").hide(0);
  $("#editForm").show(0);
  $("form input").prop('disabled', true);
  $(this).hide(0);
});