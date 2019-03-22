var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Create a new request object
var request = new XMLHttpRequest();

function printRepoCount() {
  var responseObj = JSON.parse(this.responseText);
  console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
//  myHeading.textContent = "hello";
  document.getElementById("github1").innerHTML = responseObj.name + " has " + responseObj.public_repos + " public repositories!";
}

var request = new XMLHttpRequest();
request.onload = printRepoCount;
request.open('get', 'https://api.github.com/users/eagletusk', true)
request.send()
// => Giovanni Funchal has 8 public repositories!
document.getElementById("demo").innerHTML = 5 + 6;
