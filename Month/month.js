function getMonthData(data) {
  let dataArr = data;
  let fourthWeek = getWeeksdataArr(dataArr);
  let thirddataArr = removeItems(dataArr);
  let thirdWeek = getWeeksdataArr(thirddataArr);
  let seconddataArr = removeItems(thirddataArr);
  let secondWeek = getWeeksdataArr(seconddataArr);
  let firstdataArr = removeItems(seconddataArr);
  let firstWeek = getWeeksdataArr(firstdataArr);
  let monthObj = {
      labels: ["First", "Second", "Third", "Fourth"],
      downloads: [firstWeek,secondWeek,thirdWeek,fourthWeek]
  }
  return monthObj;
}
function getWeeksdataArr(data) {
  let dataArr = data;
  let sum = 0;
  for (let i = 7; i > 0; i--) {
    let dataPoint = dataArr[dataArr.length - i];
    sum += dataPoint.downloads;
  }
  return sum;
}

function removeItems(data) {
  let dataArr = data;
  for (let i = 0; i < 7; i++) {
    dataArr.pop();
  }
  return dataArr;
}
export {getMonthData}
