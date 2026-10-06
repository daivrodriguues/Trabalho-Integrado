const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("aberto");
  });
}


// ==============================
// QUIZ
// ==============================

const quiz = document.querySelector("#quizForm");
const botaoResultado = document.querySelector("#botaoResultado");

if (quiz && botaoResultado) {

  function verificarRespostas() {

    const q1 = quiz.querySelector('input[name="q1"]:checked');
    const q2 = quiz.querySelector('input[name="q2"]:checked');
    const q3 = quiz.querySelector('input[name="q3"]:checked');
    const q4 = quiz.querySelector('input[name="q4"]:checked');
    const q5 = quiz.querySelector('input[name="q5"]:checked');
    const q6 = quiz.querySelector('input[name="q6"]:checked');
    const q7 = quiz.querySelector('input[name="q7"]:checked');
    const q8 = quiz.querySelector('input[name="q8"]:checked');
    const q9 = quiz.querySelector('input[name="q9"]:checked');
    const q10 = quiz.querySelector('input[name="q10"]:checked');


    if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
      botaoResultado.disabled = false;
    } else {
      botaoResultado.disabled = true;
    }
  }


  // Verifica toda vez que uma alternativa é selecionada
  const alternativas = quiz.querySelectorAll('input[type="radio"]');

  alternativas.forEach((alternativa) => {
    alternativa.addEventListener("change", verificarRespostas);
  });


  // Começa desativado
  verificarRespostas();


  // Resultado
  quiz.addEventListener("submit", function (e) {

    e.preventDefault();

    const respostas = {
      q1: "c",
      q2: "a",
      q3: "a",
      q4: "b",
      q5: "c",
      q6: "a",
      q7: "c",
      q8: "b",
      q9: "b",
      q10: "a",
    };

    let pontos = 0;

    for (const questao in respostas) {

      const resposta = quiz.querySelector(
        `input[name="${questao}"]:checked`
      );

      if (resposta && resposta.value === respostas[questao]) {
        pontos++;
      }
    }

    const resultado = document.querySelector("#resultado");

    if (resultado) {
      resultado.textContent =
        `Você acertou ${pontos} de 10 questões.`;
    }

  });

}
const botoesPaginas = document.querySelectorAll("[data-pagina]");

botoesPaginas.forEach((botao) => {
  botao.addEventListener("click", () => {
    const idPagina = botao.dataset.pagina;
    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach((pagina) => {
      pagina.classList.remove("ativa");
    });

    const paginaEscolhida = document.getElementById(idPagina);

    if (paginaEscolhida) {
      paginaEscolhida.classList.add("ativa");
    }
  });
});