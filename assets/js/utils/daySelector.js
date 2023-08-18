export function dayPlusThree(dateObject, currentDate, row) {
  if (dateObject.getDate() === currentDate + 3) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}
export function dayPlusTwo(dateObject, currentDate, row) {
  if (dateObject.getDate() === currentDate + 2) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}
export function dayPlusOne(dateObject, currentDate, row) {
  if (dateObject.getDate() === currentDate + 1) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}

export function today(dateObject, currentDate, row) {
  if (dateObject.getDate() === currentDate) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}
