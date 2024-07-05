//  XSS aqui

const formXSS = document.querySelector("#box-input-xss");

formXSS.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputXSS = document.querySelector("#inputXSS").value;
  const textoXSS = document.querySelector("#texto-xss");
  textoXSS.innerHTML = "O valor do campo é: " + inputXSS;
});

//  SQL Injection aqui

const formSQL = document.querySelector("#box-input-sql");

formSQL.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputXSS = document.querySelector("#inputSQL").value;
  const textoXSS = document.querySelector("#texto-sql");
  textoXSS.innerHTML = inputXSS;
});
