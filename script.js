import { displayLineChart } from "./linechart.js";
import { displayPieChart } from "./piechart.js";

//labels data
const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const monthLabels = ["First", "Second", "Third", "Fourth"];
const threeMonthsLabels = ["1st", "2nd", "3rd"];

//test data
const weekArr = [200, 220, 210, 280, 269, 203, 313];
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
