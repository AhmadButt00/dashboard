
function format(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
  }
  
  function getCurrentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  let currentDate = getCurrentDate();
  
  var now = new Date();
  var daysOfYear = [];
  for (var d = new Date(2020, 1, 1); d <= now; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(format(new Date(d)));
  }

//   function convert() {
//     // Unixtimestamp
//     var unixtimestamp = 1577491200;
  
//     // Convert timestamp to milliseconds
//     var date = new Date(unixtimestamp * 1000);
  
//     // Year
//     var year = date.getFullYear();
  
//     // Month
//     var month = date.getMonth() + 1;
  
//     // Day
//     var day = date.getDate();
  
//     // Display date time in MM-dd-yyyy format
//     var convdataTime = `${year}-${month}-${day}`;
  
//     console.log(convdataTime);
//   }
  
//   convert();
var myHeaders = new Headers();
myHeaders.append("XF-Api-Key", "IxpVwsj_vR-AkKMRLAkPKqrSL0FmxThM");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://d1.gotoproject.net/xf212/api/download-stats?week=2020-03-13", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));