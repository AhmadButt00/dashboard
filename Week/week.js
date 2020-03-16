let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

function getWeekData(data){
    let weekData = [];
    let dataArr = data
    for(let i = 7; i>0; i--){
        weekData.push(dataArr[dataArr.length - i])
    }
    let labels =[];
    let downloads = [];
    weekData.forEach(data => {
        labels.push(weekday[new Date(data.date).getDay()]);
        downloads.push(data.downloads);
    })
    let weekObj = {
        labels: labels,
        downloads: downloads
    }
    return weekObj;
}
export {getWeekData}