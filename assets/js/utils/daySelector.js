export function daySelector(page, index, row) {
  if (page === "tableau") {
    if (index >= 0 && index < 24) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau1") {
    if (index >= 24 && index < 48) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau2") {
    if (index >= 48 && index < 72) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau3") {
    if (index >= 72 && index < 96) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  }
}

export function daySelectorLongTerm(page, index, row) {
  if (page === "tableau4") {
    if (index >= 96 && index < 120) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau5") {
    if (index >= 120 && index < 144) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau6") {
    if (index >= 144 && index < 168) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau7") {
    if (index >= 168 && index < 192) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau8") {
    if (index >= 192 && index < 216) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau9") {
    if (index >= 216 && index < 240) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau10") {
    if (index >= 240 && index < 264) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau11") {
    if (index >= 264 && index < 288) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau12") {
    if (index >= 288 && index < 312) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau13") {
    if (index >= 312 && index < 336) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau14") {
    if (index >= 336 && index < 360) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  } else if (page === "tableau15") {
    if (index >= 360 && index < 384) {
      row.classList.add("current-time");
    } else {
      row.classList.add("before-time");
    }
  }
}
