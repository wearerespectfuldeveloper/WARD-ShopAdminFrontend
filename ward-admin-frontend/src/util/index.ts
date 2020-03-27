export const getCurrentDate = () => {
  const now = new Date();

  const year = String(now.getFullYear());
  let month = String(now.getMonth() + 1);
  if (month.length === 1) {
    month = "0" + month;
  }
  let date = String(now.getDate());
  if (date.length === 1) {
    date = "0" + date;
  }
  let hours = String(now.getHours());
  if (hours.length === 1) {
    hours = "0" + hours;
  }
  let minutes = String(now.getMinutes());
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  let seconds = String(now.getSeconds());
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  let milliseconds = String(now.getMilliseconds());

  if (milliseconds.length === 2) {
    milliseconds = "0" + milliseconds;
  } else if (milliseconds.length === 1) {
    milliseconds = "00" + milliseconds;
  }

  const dates = [year, month, date];
  const time_list = [hours, minutes, seconds + "." + milliseconds];

  const now_formatted = dates.join("-") + "T" + time_list.join(":");
  return now_formatted;
};

