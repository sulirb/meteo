export async function codeToComm() {
  const codeElements = document.querySelectorAll(
    ".weather__descr, .max__descr, .min__descr"
  );

  async function codeComm(codeElement, text) {
    codeElement.textContent = "";
    const par = document.createElement("p");
    par.textContent = text;
    codeElement.appendChild(par);
  }

  for (const codeElement of codeElements) {
    const codeValue = codeElement.textContent;

    if (codeValue === "0") {
      await codeComm(codeElement, "Ensoleillé");
    } else if (codeValue === "1") {
      await codeComm(codeElement, "Ensoleillé dans l'ensemble");
    } else if (codeValue === "2") {
      await codeComm(codeElement, "Nuageux dans l'ensemble");
    } else if (codeValue === "3") {
      await codeComm(codeElement, "Nuageux");
    } else if (["51", "53", "55", "61", "63", "65"].includes(codeValue)) {
      await codeComm(codeElement, "Pluvieux");
    } else if (["81", "82", "83", "95", "96", "99"].includes(codeValue)) {
      await codeComm(codeElement, "Orageux");
    }
  }
}
