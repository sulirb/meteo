export function codeToIcon() {
  const codeElements = document.querySelectorAll(
    ".weather__code, .max__code, .min__code"
  );

  codeElements.forEach((codeElement) => {
    function codeImage(link) {
      codeElement.textContent = "";
      const img = document.createElement("img");
      img.setAttribute("src", link);
      codeElement.appendChild(img);
    }

    const codeValue = codeElement.textContent;

    if (codeValue === "0") {
      codeImage("https://api.iconify.design/noto-v1/sun.svg");
    } else if (codeValue === "1") {
      codeImage(
        "https://api.iconify.design/noto-v1/sun-behind-small-cloud.svg"
      );
    } else if (codeValue === "2") {
      codeImage("https://api.iconify.design/noto-v1/sun-behind-cloud.svg");
    } else if (codeValue === "3") {
      codeImage("https://api.iconify.design/noto-v1/cloud.svg");
    } else if (["51", "53", "55", "61", "63", "65"].includes(codeValue)) {
      codeImage("https://api.iconify.design/noto/cloud-with-rain.svg");
    } else if (["81", "82", "83", "95", "96", "99"].includes(codeValue)) {
      codeImage(
        "https://api.iconify.design/noto/cloud-with-lightning-and-rain.svg"
      );
    }
  });
}
