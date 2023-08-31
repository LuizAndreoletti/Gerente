document.getElementById('chamadoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Enviar os dados para o servidor (simulação)
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    console.log('Nome: ' + nome);
    console.log('Email: ' + email);
    console.log('Mensagem: ' + mensagem);
    
    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
  });