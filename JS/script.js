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
const edit = document.getElementById('editar');
const save = document.getElementById('salvar');
const cancelBtn = document.getElementById('cancel-btn');
const firstNameInput = document.getElementById('nome');
const lastNameInput = document.getElementById('sobrenome');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
const errorMsg = document.getElementById('error-msg');



$("#registrar").click(function(){
  $("p").hide(0);
  $("#editForm").show(0);
  $("form input").prop('disabled', true);
  $(this).hide(0);
});

/*-------editar-------*/
function editar() {
  alert("Foi");

  const pri = document.getElementById("prioridade");
  const setor = document.getElementById("setor");
  const text = document.getElementById("texto");

  var x = document.getElementById("salvar");
  if (x.style.display == "none") {
    x.style.display = "flex";
    pri.removeAttribute("disabled");
    setor.removeAttribute("disabled");
    text.removeAttribute("disabled");
  } else {
    x.style.display = "none";
    
  }

  

}


function salvar(){
  pri.setAttribute('disabled', '');
    setor.setAttribute('disabled');
    text.setAttribute("disabled");
}