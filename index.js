const header = document.querySelector('.header-light');
const h1 = document.querySelector('.h1-light');
const link = document.querySelectorAll('.link-light');
const buttonTheme = document.getElementById('buttonTheme');

// Função para atualizar os estilos com base no tema atual
function updateStyles(theme) {
  document.body.classList.toggle('body-dark', theme === 'dark');
  header.classList.toggle('header-dark', theme === 'dark');
  h1.classList.toggle('h1-dark', theme === 'dark');
  link.forEach(link => link.classList.toggle('link-dark', theme === 'dark'));
}

const themeAtual = localStorage.getItem('theme') || 'light';
updateStyles(themeAtual);


buttonTheme.addEventListener('click', () => {
  const theme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateStyles(theme);
});