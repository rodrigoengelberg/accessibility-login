document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Add your login logic here

        // For demonstration purposes, we'll just show an alert
        alert(`Usuário: ${username}\nSenha: ${password}`);
    });
});
