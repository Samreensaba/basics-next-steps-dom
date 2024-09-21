console.log("yay!");

var imageArr = [
  "https://gblobscdn.gitbook.com/assets%2F-MBhJa4xpezxI4J9lolG%2F-MGrF6rE0CBWVzznQayq%2F-MGrGfwNRi1D6aKWmg4G%2Fducks2.jpeg?alt=media&token=9dff244b-10e8-4fab-ab68-715e09998ff3",
  "http://2.bp.blogspot.com/-BN0cosESfDI/UVkw4ZsRN6I/AAAAAAAAC5k/dYeTZmw9GY4/s1600/Small-Bird-+(9).jpg",
  "https://tse4.mm.bing.net/th?id=OIP.p-PBTZsByW4kOTy0gl1XPAHaGi&pid=Api&P=0&h=180",
  "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/40/pom.jpg",
];

var makeCard = function (imageArr) {
  var i = 0;
  while (imageArr[i]) {
    var cardSection = document.createElement("section");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var imgTag = document.createElement("img");
    imgTag.src = imageArr[i];
    imgTag.alt = "card Image";
    p2.appendChild(imgTag);
    cardSection.appendChild(p1);
    cardSection.appendChild(p2);
    document.body.appendChild(cardSection);
  }
};

let makeBox = function () {
  var division = document.createElement("div");
  var para1 = document.createElement("p");
  para1.innerText = "Make a box was called.";
  var para2 = document.createElement("p");
  para2.innerText = "Hello :)";
  var bttn = document.createElement("button");
  bttn.innerText = "Make Card";
  bttn.addEventListener("click", makeCard(imageArr));
  division.appendChild(para1);
  division.appendChild(para2);
  division.appendChild(bttn);
  document.body.appendChild(division);
};

makeBox();
