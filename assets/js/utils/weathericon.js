export async function codeToIcon() {
  const codeElements = document.querySelectorAll(
    ".weather__code, .max__code, .min__code"
  );

  async function codeImage(codeElement, link, altText) {
    codeElement.textContent = "";
    const img = document.createElement("img");
    img.setAttribute("src", link);
    img.setAttribute("alt", altText);
    codeElement.appendChild(img);
  }

  for (const codeElement of codeElements) {
    const codeValue = codeElement.textContent;

    if (codeValue === "0") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/sun.svg",
        "Sun"
      );
    } else if (codeValue === "1") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/sun-behind-small-cloud.svg",
        "Sun behind small cloud"
      );
    } else if (codeValue === "2") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/sun-behind-cloud.svg",
        "Sun behind cloud"
      );
    } else if (codeValue === "3") {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/cloud.svg",
        "Cloud"
      );
    } else if (["51", "53", "55", "61", "63", "65"].includes(codeValue)) {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto/cloud-with-rain.svg",
        "Cloud with rain"
      );
    } else if (["80", "81", "82", "83", "95", "96", "99"].includes(codeValue)) {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto/cloud-with-lightning-and-rain.svg",
        "Cloud with lightning and rain"
      );
    } else if (["45", "48"].includes(codeValue)) {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/fog.svg",
        "Fog"
      );
    } else if (["71", "73", "75", "77"].includes(codeValue)) {
      await codeImage(
        codeElement,
        "https://api.iconify.design/noto-v1/cloud-with-snow.svg",
        "Cloud with snow"
      );
    }
  }
}
