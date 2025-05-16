document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!name || !email || !password) {
      document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
      document.getElementById('message').style.color = 'red';
      return;
    }
  
    const user = { name, email, password };
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Verifica se o e-mail já está cadastrado
    if (users.some(u => u.email === email)) {
      document.getElementById('message').textContent = 'E-mail já cadastrado.';
      document.getElementById('message').style.color = 'red';
      return;
    }
  
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    document.getElementById('message').textContent = 'Cadastro realizado com sucesso!';
    document.getElementById('message').style.color = 'green';
  
    // Limpa o formulário
    document.getElementById('registrationForm').reset();
  });
  