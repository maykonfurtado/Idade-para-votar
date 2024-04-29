
const idade = parseInt(prompt("Digite sua idade:"));
if (idade < 16) {
  console.log("Você ainda não tem idade para votar.");
} else if (idade >= 16 && idade <= 17) {
  console.log("Seu voto é opcional.");
} else if (idade >= 18 && idade <= 70) {
  console.log("Seu voto é obrigatório.");
} else {
  console.log("Seu voto é opcional.");
}
