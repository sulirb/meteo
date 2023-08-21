export function dayPlusThree(dateObjectTimestamp, currentDateTimestamp, row) {
  const currentDate = new Date(currentDateTimestamp).getDate();
  if (new Date(dateObjectTimestamp).getDate() === currentDate + 3) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}

export function dayPlusTwo(dateObjectTimestamp, currentDateTimestamp, row) {
  const currentDate = new Date(currentDateTimestamp).getDate();
  if (new Date(dateObjectTimestamp).getDate() === currentDate + 2) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}

export function dayPlusOne(dateObjectTimestamp, currentDateTimestamp, row) {
  const currentDate = new Date(currentDateTimestamp).getDate();
  if (new Date(dateObjectTimestamp).getDate() === currentDate + 1) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}

export function today(dateObjectTimestamp, currentDateTimestamp, row) {
  const currentDate = new Date(currentDateTimestamp).getDate();
  if (new Date(dateObjectTimestamp).getDate() === currentDate) {
    row.classList.add("current-time");
  } else {
    row.classList.add("before-time");
  }
}
