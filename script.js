function calculateResult() {
  const answers = [
    document.querySelector('input[name="q1"]:checked')?.value,
    document.querySelector('input[name="q2"]:checked')?.value,
    document.querySelector('input[name="q3"]:checked')?.value
  ];

  if (answers.includes(undefined)) {
    alert("Prašome atsakyti į visus klausimus.");
    return;
  }

  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");

    const key = answers.join("");

    let resultText = "";

    if (key === "ACB" || key === "ABB") {
      resultText = "<h2>Rezultatas Nr. 2 – Vidutinis nuovargio lygis</h2><p>Rekomenduojama peržiūrėti poilsio režimą ir sumažinti darbo krūvį.</p>";
    }
    else if (key === "CBB" || key === "DBE") {
      resultText = "<h2>Rezultatas Nr. 4 – Aukštas nuovargio lygis</h2><p>Rekomenduojama nedelsiant imtis streso mažinimo priemonių ir konsultuotis su specialistu.</p>";
    }
    else {
      resultText = "<h2>Rezultatas Nr. 1 – Žemas nuovargio lygis</h2><p>Esama būklė gera. Rekomenduojama palaikyti dabartinius įpročius.</p>";
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("result").classList.remove("hidden");

  }, 2000);
}
