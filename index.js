var addDays = require("date-fns/addDays");

function getDateAfterDays(x) {
  const baseDate = new Date("2020-08-22");
  const targetDate = addDays(baseDate, x);
  return `${targetDate.getDate()}-${
    targetDate.getMonth() + 1
  }-${targetDate.getFullYear()}`;
}

module.exports = getDateAfterDays;
