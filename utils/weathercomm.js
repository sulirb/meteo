export function codeToComm() {
  const codeElements = document.querySelectorAll(
    ".weather__descr, .max__descr, .min__descr"
  );

  codeElements.forEach((codeElement) => {
    async function codeComm(text) {
      codeElement.textContent = "";
      const par = document.createElement("p");
      par.textContent = text;
      codeElement.appendChild(par);
    }

    const codeValue = codeElement.textContent;

    if (codeValue === "0") {
      codeComm("Ensoleillé");
    } else if (codeValue === "1") {
      codeComm("Ensoleillé dans l'ensemble");
    } else if (codeValue === "2") {
      codeComm("Nuageux dans l'ensemble");
    } else if (codeValue === "3") {
      codeComm("Nuageux");
    } else if (["51", "53", "55", "61", "63", "65"].includes(codeValue)) {
      codeComm("Pluvieux");
    } else if (["81", "82", "83", "95", "96", "99"].includes(codeValue)) {
      codeComm("Orageux");
    }
  });
}
