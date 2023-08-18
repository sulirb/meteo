export async function codeToIcon() {
  const codeElements = document.querySelectorAll(
    ".weather__code, .max__code, .min__code"
  );

  async function codeImage(codeElement, link) {
    codeElement.textContent = "";
    const img = document.createElement("img");
    img.setAttribute("src", link);
    codeElement.appendChild(img);
  }

  for (const codeElement of codeElements) {
    const codeValue = codeElement.textContent;

    if (codeValue === "0") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/sun.svg"
      );
    } else if (codeValue === "1") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/sun-behind-small-cloud.svg"
      );
    } else if (codeValue === "2") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/sun-behind-cloud.svg"
      );
    } else if (codeValue === "3") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/cloud.svg"
      );
    } else if (["51", "53", "55", "61", "63", "65"].includes(codeValue)) {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto/cloud-with-rain.svg"
      );
    } else if (["81", "82", "83", "95", "96", "99"].includes(codeValue)) {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto/cloud-with-lightning-and-rain.svg"
      );
    }
  }
}
