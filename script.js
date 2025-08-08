// Escuchar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se recargue la página

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');
  const loginSection = document.getElementById('login-section');
  const successMessage = document.getElementById('success-message');

  const email = emailInput.value.trim();

  // Validaciónde email 
  if (!email.includes('@') || !email.includes('.')) {
    errorMessage.textContent = 'Por favor, ingresa un email válido.';
    return;
  }

  // Si es válido
  errorMessage.textContent = '';
  loginSection.classList.add('d-none');
  successMessage.classList.remove('d-none');
});

