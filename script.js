import { cleanData } from "./Data/cleanData.js";
import { getWeekData } from "./Week/week.js";
import { displayLineChart } from "./Charts/LineChart/linechart.js";
import {getMonthData} from './Month/month.js';
import {getThreeMonthsData} from './Threemonths/threemonths.js';

let myHeaders = new Headers();
myHeaders.append("XF-Api-Key", "IxpVwsj_vR-AkKMRLAkPKqrSL0FmxThM");

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

let resp = "";

fetch(
  "http://d1.gotoproject.net/xf212/api/download-stats?week=2020-03-13",
  requestOptions
)
  .then(response => response.text())
  .then(result => (resp = result))
  .catch(error => console.log("error", error));

setTimeout(() => mainFunction(), 1000);

function mainFunction() {
  let data = JSON.parse(resp);
  console.log(data);
  let downloadData = cleanData(data);
  //One Week
  let weekData = getWeekData(downloadData);
  //OneMonthAgo
  let monthData = getMonthData(downloadData);
  //Three Months
  let monthdata = JSON.parse(resp);
  let downloadsData = cleanData(monthdata);
  let threeMonthsData = getThreeMonthsData(downloadsData);



  //handleChange date range select
  function handleChange() {
    let range = selectRange.value;
    switch (range) {
      case "week":
        displayLineChart(weekData.labels, "Days", weekData.downloads);
        break;
      case "month":
        displayLineChart(monthData.labels, "Weeks", monthData.downloads);
        break;
      case "threeMonths":
        displayLineChart(threeMonthsData.labels, "Months", threeMonthsData.downloads);
        break;
      default:
        return;
    }
  }
  //Add Event Listener
  let selectRange = document.getElementById("selectRange");
  selectRange.addEventListener("change", handleChange);
}
