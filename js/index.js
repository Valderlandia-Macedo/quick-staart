function revelarResposta() {
  var answer = document.querySelector("#answer");
  answer.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var question = document.querySelector("#cardContainer");
  question.innerHTML = "";

  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

  cardDiv.innerHTML = `
  <div class="card-question centralizar gradiente">
  <h2 class="card-titulo">${proximaPergunta.title}</h2>
  </div>

  <div id="answer" class="card-answer blur">
    <p>
    ${proximaPergunta.description}
    </p>
  </div>`;
  question.appendChild(cardDiv);
}

function buscarCard() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarCard);
