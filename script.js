// Obtenha uma referência ao elemento de input
const input = document.getElementById('whatsapp');

// Adicione um evento de input para o input
input.oninput = formatarTelefone;

function formatarTelefone() {
  // Obtenha o valor atual do input
  let valor = input.value;

  // Remova todos os caracteres não numéricos
  valor = valor.replace(/\D/g, '');

  // Formate o número de telefone
  if (valor.length > 11) {
    // Se tiver mais de 11 dígitos, limite para 11 dígitos
    valor = valor.slice(0, 11);
  }

  // Verifique o tamanho do número de telefone para aplicar a formatação correta
  if (valor.length >= 1 && valor.length <= 2) {
    valor = `(${valor}`;
  } else if (valor.length > 2 && valor.length <= 7) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  } else if (valor.length > 7 && valor.length <= 11) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7)}`;
  }

  // Atualize o valor do input com a formatação
  input.value = valor;
}
