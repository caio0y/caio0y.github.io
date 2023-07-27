// Formatação do número de telefone do formulário
const input = document.getElementById('whatsapp');

input.oninput = formatarTelefone;

function formatarTelefone() {
  let valor = input.value;

  // Remova caracteres não numéricos
  valor = valor.replace(/\D/g, '');

  // limita a 11 digitos
  if (valor.length > 11) {
    valor = valor.slice(0, 11);
  }

  // Aplica formatação
  if (valor.length >= 1 && valor.length <= 2) {
    valor = `${valor}`;
  } else if (valor.length > 2 && valor.length <= 3) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  } else if (valor.length > 3 && valor.length <= 7) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}`;
  } else if (valor.length > 7 && valor.length <= 11) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7)}`;
  }

  // Atualiza com a formatação
  input.value = valor;
}

// Envio de formulário por email
document.addEventListener("DOMContentLoaded", function () {

  const formularioContato = document.getElementById("contatoForm");

  formularioContato.onsubmit = function (e) {
    e.preventDefault(); // Impede que saia da página

    const formData = new FormData(formularioContato);

    // Envio de dados usando AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", formularioContato.action, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // mensagem de sucesso e reset do formulario
        formularioContato.reset();
        alert("Enviado com sucesso!");
      } else if (xhr.readyState === 4) {
        // mensagem de falha
        alert("Ocorreu um erro.");
      }
    };
    xhr.send(formData);
  };
});



