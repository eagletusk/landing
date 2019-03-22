
// Github XMLHttpRequest section
var request = new XMLHttpRequest();
var text = "";
var index;

function printRepoCount() {
    var responseObj = JSON.parse(this.responseText);
    var count = Object.keys(responseObj).length;
    for (index = 0; index <= count-1; ++index){
      text = text +  "<li><em> Github Repository name: " + '<a href="' + responseObj[index].html_url + '">'+ responseObj[index].name + "</a>"+ "</em></li>";
    }
    document.getElementById("github").innerHTML = text;
  }

//Git hub XMLHttpRequest
var request = new XMLHttpRequest();
request.onload = printRepoCount;
request.open('get', 'https://api.github.com/users/eagletusk/repos', true)
request.send()

//Map code
var L;
window.onload = function() {
  L.mapquest.key = 'zwIP5XgnZrqG2OGmp9gpoaUV6Evt67Zo';
  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [45.5205432,-122.67782],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });
}
