document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const idade = parseInt(document.getElementById('age').value);
  let mensagem;

  if (idade < 16) {
      mensagem = "Você ainda não tem idade para votar.";
  } else if (idade >= 16 && idade <= 17) {
      mensagem = "Seu voto é opcional.";
  } else if (idade >= 18 && idade <= 70) {
      mensagem = "Seu voto é obrigatório.";
  } else {
      mensagem = "Seu voto é opcional.";
  }

  document.getElementById('result').innerText = mensagem;
});
