
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    
];


function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginForm.classList.toggle("hidden");
    registerForm.classList.toggle("hidden");
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert(`Bem-vindo, ${username}!`);
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    
    const userExists = users.some(u => u.username === username);

    if (userExists) {
        alert('Este usuário já existe. Escolha outro username.');
    } else {
        
        users.push({ username, password });
        alert('Cadastro realizado com sucesso!');
    }
}
