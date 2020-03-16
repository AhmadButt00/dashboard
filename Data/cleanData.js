//FORMAT Date in yyy-mm-dd format
function format(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}

function cleanData(data) {
  let downloadData = data.data;
  let endDate = new Date();
  endDate.setDate(endDate.getDate() - 1);
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - 1);
  let startMonth = startDate.getMonth() - 3;
  startDate.setMonth(startMonth);
  let range = getDateRange(startDate, endDate);
  let cleanData = [];
  for (let i = 0; i < range.length; i++) {
    let rangeDate = range[i];
    let match = false;
    let obj = {
      date: "",
      downloads: ""
    };
    for (let j = 0; j < downloadData.length; j++) {
      if (rangeDate == downloadData[j].date) {
        obj.date = downloadData[j].date;
        obj.downloads = downloadData[j].count;
        cleanData.push(obj);
        match = true;
        break;
      }
    }
    if (!match) {
      obj.date = rangeDate;
      obj.downloads = 0;
      cleanData.push(obj);
    }
  }
 return cleanData;
}

//Get Dates from inital date to current date
function getDateRange(initialDate, endDate) {
  let now = endDate;
  let dateRange = [];
  for (
    let d = new Date(
      initialDate.getFullYear(),
      initialDate.getMonth(),
      initialDate.getDate()
    );
    d < now;
    d.setDate(d.getDate() + 1)
  ) {
    dateRange.push(format(new Date(d)));
  }
  return dateRange;
}
export { cleanData };
