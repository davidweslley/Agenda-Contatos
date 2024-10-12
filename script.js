// Selecionando elementos do DOM
const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

// Evento para adicionar novo contato
contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Previne o reload da página

  // Pegando valores do input
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // Criando novo elemento de lista para o contato
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${name} - ${phone}</span>
    <button class="deleteBtn">Excluir</button>
  `;

  // Adiciona o contato na lista
  contactList.appendChild(li);

  // Limpar campos do formulário
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';

  // Evento para remover contato
  li.querySelector('.deleteBtn').addEventListener('click', function() {
    contactList.removeChild(li);
  });
});
