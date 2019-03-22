
// Github XMLHttpRequest section
var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var text = "";
var i = 0;
var index;
var a = ["a", "b", "c"];
var myObj, i, j, x = "";
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
    {"name":"BMW", "models":["320", "X3", "X5"]},
    {"name":"Fiat", "models":["500", "Panda"] }
  ]
}

function printRepoCount() {
    var responseObj = JSON.parse(this.responseText);
    var count = Object.keys(responseObj).length;
    for (index = 0; index <= count-1; ++index){
      text = text +  " Repo "+ index +" name: "+ responseObj[index].name+ "<br>";

    }
    document.getElementById("github2").innerHTML = text;
  }

  // document.getElementById("github1").innerHTML = responseObj[0].name + "a";
  //
  // document.getElementById("github2").innerHTML = "Username: " + responseObj.login+
  // "<br> Name: " + responseObj.name +
  // "<br> Company: " + responseObj.company +
  // "<br> Blog: " + responseObj.blog +
  // "<br> Location: " + responseObj.location +
  // "<br> # of repos: " + responseObj.public_repos +
  // "";



//Git hub XMLHttpRequest
var request = new XMLHttpRequest();
request.onload = printRepoCount;
request.open('get', 'https://api.github.com/users/eagletusk/repos', true)
request.send()

// function printRepoCount() {
//   var responseObj = JSON.parse(this.responseText);
//   console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
// //  myHeading.textContent = "hello";
//   document.getElementById("github1").innerHTML = responseObj.name + " has " + responseObj.public_repos + " public repositories!";
//
//   document.getElementById("github2").innerHTML = "Username: " + responseObj.login+
//   "<br> Name: " + responseObj.name +
//   "<br> Company: " + responseObj.company +
//   "<br> Blog: " + responseObj.blog +
//   "<br> Location: " + responseObj.location +
//   "<br> # of repos: " + responseObj.public_repos +
//   "";
//
// }
//
// function printRepos() {
//   document.getElementById("github3").innerHTML = "3" ;
//
// }

// //Git hub XMLHttpRequest
// var request = new XMLHttpRequest();
// request.onload = printRepoCount;
// request.open('get', 'https://api.github.com/users/eagletusk/', true)
// request.send()

//Git hub XMLHttpRequest
// var request2 = new XMLHttpRequest();
// request.onload = printRepos;
// request.open('get', 'https://api.github.com/users/eagletusk/repos', true)
// //request.send()


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

// "<br> URL: " + responseObj.url +
// "<br> blog: " + responseObj.blog +
// "<br> location: " + responseObj.location +
