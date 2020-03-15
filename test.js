import { displayLineChart } from "./linechart.js";

//labels data
const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];



function format(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
  }
var initialDate = new Date();
initialDate.setDate(initialDate.getDate() - 6);
console.log(initialDate);
let currentdate = new Date();

function getDateRange(){
  var now = new Date();
  var daysOfYear = [];
  for (var d = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate()); d < now; d.setDate(d.getDate() + 1)) {
      daysOfYear.push(format(new Date(d)));
  }
  return daysOfYear;
}

function getWeekData(){
    let downloads = [];
    let fetchResult = JSON.parse(data);
    let dateRange = getDateRange();
    let results = fetchResult.data;
    console.log(dateRange);
    console.log(results);
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
    return downloads
}
export  {getWeekData}