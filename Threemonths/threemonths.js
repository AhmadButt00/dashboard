function getThreeMonthsData(data){
    let downloadData = data;
    let thirdMonth = getMonthdata(downloadData);
    let secondData = removeItems(downloadData);
    let secondMonth = getMonthdata(secondData);
    let firstData = removeItems(secondData);
    let firstMonth = getMonthdata(firstData);
    let threeMonthArr = {
        labels: ["First", "Second", "Third"],
        downloads: [firstMonth,secondMonth,thirdMonth]
    }
    return threeMonthArr
}

function getMonthdata(data) {
    let dataArr = data;
    let sum = 0;
    for (let i = 30; i > 0; i--) {
      let dataArrPoint = dataArr[dataArr.length - i];
      sum += dataArrPoint.downloads;
    }
    return sum;
  }
function removeItems(data){
    let dataArr = data;
    for (let i = 0; i < 30; i++) {
      dataArr.pop();
    }
    return dataArr;
}
export {getThreeMonthsData}