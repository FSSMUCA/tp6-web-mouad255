const form = document.getElementById("formCalc");
const error = document.getElementById("error");
const res = document.getElementById("res");
const historyUl = document.getElementById("history");

let history = [];

function afficherHistorique() {
  historyUl.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    const li = document.createElement("li");
    li.textContent = history[i];
    historyUl.appendChild(li);
  }
}

form.addEventListener("submit", function(e){
  e.preventDefault();
  error.textContent = "";

  const aValue = document.getElementById("a").value;
  const bValue = document.getElementById("b").value;
  const op = document.getElementById("op").value;

  if (aValue === "" || bValue === "") {
    error.textContent = "Remplissez les champs.";
    res.textContent = "-";
    return;
  }

  const a = Number(aValue);
  const b = Number(bValue);

  if (op === "/" && b === 0) {
    error.textContent = "Division par zéro interdite.";
    res.textContent = "-";
    return;
  }

  let resultat = 0;
  if (op === "+") resultat = a + b;
  if (op === "-") resultat = a - b;
  if (op === "*") resultat = a * b;
  if (op === "/") resultat = a / b;

  res.textContent = resultat;

  history.unshift(a + " " + op + " " + b + " = " + resultat);
  afficherHistorique();
});
