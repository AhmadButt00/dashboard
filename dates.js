var myHeaders = new Headers();
myHeaders.append("XF-Api-Key", "IxpVwsj_vR-AkKMRLAkPKqrSL0FmxThM");

var requestOptions = {
method: 'POST',
headers: myHeaders,
redirect: 'follow'
};

let data= '';

fetch("http://d1.gotoproject.net/xf212/api/download-stats?week=2020-03-13", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.then(result => data = result)
.then(console.log(data))
.catch(error => console.log('error', error));

class DateRange {
    getData(){      
         
    }
}