import { displayLineChart } from "./linechart.js";
import { displayPieChart } from "./piechart.js";


//labels data
const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const monthLabels = ["First", "Second", "Third", "Fourth"];
const threeMonthsLabels = ["1st", "2nd", "3rd"];

//test data
let weekArr = [200, 220, 210, 280, 269, 203, 313];
const monthArr = [1120, 1300, 1209, 1544];
const threeMonthArr = [5400, 5622, 5536];

const pieWeek = [3200, 7500];
const pieMonth = [12000, 32000];
const pieThreeMonth = [38150, 98521];

//Add Event Listener
let selectRange = document.getElementById("selectRange");
selectRange.addEventListener("change", handleChange);

//handleChange date range select
function handleChange() {
  let range = selectRange.value;
  switch (range) {
    case "week":
      displayLineChart(weekLabels, "Days", weekArr);
      displayPieChart(pieWeek);
      break;
    case "month":
      displayLineChart(monthLabels, "Weeks", monthArr);
      displayPieChart(pieMonth);
      break;
    case "threeMonths":
      displayLineChart(threeMonthsLabels, "Months", threeMonthArr);
      displayPieChart(pieThreeMonth);
      break;
    default:
      return;
  }
}

//Fetch data from API
var myHeaders = new Headers();
myHeaders.append("XF-Api-Key", "IxpVwsj_vR-AkKMRLAkPKqrSL0FmxThM");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

let data = ''

fetch("http://d1.gotoproject.net/xf212/api/download-stats?week=2020-03-13", requestOptions)
  .then(response => response.text())
  .then(result => data = result)
  .catch(error => console.log('error', error));

setTimeout(() => weekArr = getWeekData(), 1000)


//FORMAT Date in yyy-mm-dd format
function format(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}
var initialDate = new Date();
initialDate.setDate(initialDate.getDate() - 6);


//Get Dates from inital date to current date
function getDateRange(){
var now = new Date();
var daysOfYear = [];
for (var d = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate()); d < now; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(format(new Date(d)));
}
return daysOfYear;
}


//Get downloads as per week
function getWeekData(){
  let downloads = [];
  let fetchResult = JSON.parse(data);
  let dateRange = getDateRange();
  let results = fetchResult.data;
  for(let i=0; i<dateRange.length; i++){
    let match = false;
    for(let j =0; j<results.length;j++){
      if(dateRange[i] == Object.values(results[j])[0]){
        match = true;
        downloads.push(Object.values(results[j])[1])
        break;
      }
    }
    if(!match){
      downloads.push("0")
    }
  }
  console.log(downloads);
  return downloads
}
export  {getWeekData}