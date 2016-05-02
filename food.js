var dogRequest = new XMLHttpRequest();
var catRequest = new XMLHttpRequest();
var card = document.getElementById("cardLocation")
var newCard = card;

function getDogFood() {
  var data = JSON.parse(this.responseText).dog_brands;
  console.log(data)
  for (var i = 0; i < data.length; i++) {
    var productType = data[i].types
    var productName = "<h2>" + data[i].name + "</h2>";
    // console.log(data[i]);
    for (var b = 0; b < productType.length; b++) {
      var style = "<h5>" + productType[b].type + "</h5>";
      // console.log(productType[b]);
      var volumeType = productType[b].volumes
      for (var c = 0; c < volumeType.length; c++) {
        var volumeName = "<p>" + volumeType[c].name + "</p>";
        var volumePrice = "<p>" + volumeType[c].price + "</p>";
        // console.log(productName, style, volumeName, volumePrice);
        card.innerHTML += "<div class='cardStyle'>" + productName + style + volumeName + volumePrice + "</div>"
      }
    }
  }
}

function errorAlert() {
  alert("Request Failed");
}

dogRequest.addEventListener("load", getDogFood);
dogRequest.addEventListener("error", errorAlert);

catRequest.addEventListener("load", getCatFood);
catRequest.addEventListener("error", errorAlert);

dogRequest.open("GET", "dog_food.json");
catRequest.open("GET", "cat_food.json");

dogRequest.send();
catRequest.send();
