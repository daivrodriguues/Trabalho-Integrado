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
const botaoReiniciar = document.querySelector("#botaoReiniciar");

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

    const fieldset = resposta.closest("fieldset");

    // Remove o feedback antigo, caso o usuário envie novamente
    const feedbackAntigo = fieldset.querySelector(".feedback");

    if (feedbackAntigo) {
      feedbackAntigo.remove();
    }

    const feedback = document.createElement("p");
    feedback.classList.add("feedback");

    if (resposta.value === respostas[questao]) {

      pontos++;

      feedback.classList.add("correta");
      feedback.textContent = "✓ Resposta correta!";

    } else {

      feedback.classList.add("incorreta");

      // Encontra a alternativa correta
      const alternativaCorreta = fieldset.querySelector(
        `input[value="${respostas[questao]}"]`
      );

      // Pega o texto da alternativa correta
      const textoCorreto =
        alternativaCorreta.parentElement.textContent.trim();

      feedback.innerHTML =
        `✗ Resposta errada!<br>
        <strong>Resposta correta:</strong> ${textoCorreto}`;
    }

    // Coloca o feedback no final da questão
    fieldset.appendChild(feedback);
  }

  const resultado = document.querySelector("#resultado");

  const porcentagem = (pontos / 10) * 100;

let mensagem = "";
let classe = "";

if (porcentagem < 50) {

  mensagem = "Estude mais! Você ainda precisa revisar o conteúdo.";
  classe = "resultado-vermelho";

} else if (porcentagem < 70) {

  mensagem = "Bom começo! Você entendeu parte do conteúdo, mas ainda dá para melhorar.";
  classe = "resultado-amarelo";

} else if (porcentagem < 90) {

  mensagem = "Muito bem! Você foi bem, mas ainda dá para melhorar alguns pontos.";
  classe = "resultado-azul";

} else {

  mensagem = "Excelente! Você demonstrou um ótimo domínio do conteúdo.";
  classe = "resultado-verde";

}

resultado.className = "resultado mostrar " + classe;

resultado.innerHTML =

resultado.innerHTML =
  `<strong>${pontos}/10 (${porcentagem}%)</strong><br>
   ${mensagem}`;

});

  // Reiniciar quiz
if (botaoReiniciar) {

  botaoReiniciar.addEventListener("click", function () {

    // Desmarca todas as respostas
    const alternativas = quiz.querySelectorAll(
      'input[type="radio"]'
    );

    alternativas.forEach((alternativa) => {
      alternativa.checked = false;
    });

    // Remove os feedbacks
    const feedbacks = quiz.querySelectorAll(".feedback");

    feedbacks.forEach((feedback) => {
      feedback.remove();
    });

    // Limpa o resultado
    const resultado = document.querySelector("#resultado");

    if (resultado) {
      resultado.textContent = "";
      resultado.className = "resultado";
    }

    // Desativa novamente o botão de resultado
    botaoResultado.disabled = true;

    // Volta para o topo do quiz
    quiz.scrollIntoView({
      behavior: "smooth"
    });

  });

}

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
