let tmp = 1;
let numbers;
const input_form = document.getElementById("input_form");
const price = document.getElementById("price");
const box = document.getElementById("box");

let yn = "Y";
/*
function decryptEffect(element, time) {
  const effect = setInterval(() => {
    element.innerText = Math.floor(Math.random() * 44 + 1);
  }, 10);

  setTimeout(() => {
    const random = Math.floor(Math.random() * numbers.length);

    clearInterval(effect);
    element.classList.add("done");
    element.innerText = numbers[random];

    numbers.splice(random, 1);
  }, time * 250);
}
*/

function lottery() {
  const cnt = document.getElementsByClassName("numbers").length;

  for (var i = 0; i < cnt; i++) {
    numbers = Array.from({ length: 45 }, (_, i) => i + 1);

    var parentElement = document.querySelectorAll("#lotto" + i + " .ball");

    for (var j = 0; j < parentElement.length; j++) {
      var element = document.querySelectorAll("#lotto" + i + " .ball")[j];
      element.classList.remove("done");

      const random = Math.floor(Math.random() * numbers.length);

      element.classList.add("done");
      element.innerText = numbers[random];

      numbers.splice(random, 1);
    }
  }
}

document.getElementById("input").addEventListener("click", function () {
  event.preventDefault();

  document.querySelectorAll(".numbers").forEach((element, index) => {
    minusClick(element);
  });

  const cnt = price.value / 1000;
  for (var i = 0; i < cnt; i++) {
    const container = document.createElement("div");
    const minus = document.createElement("div");
    const ballBlue1 = document.createElement("div");
    ballBlue1.classList += "ball blue";
    ballBlue1.innerText = "?";
    const ballBlue2 = document.createElement("div");
    ballBlue2.classList += "ball blue";
    ballBlue2.innerText = "?";
    const ballBlue3 = document.createElement("div");
    ballBlue3.classList += "ball blue";
    ballBlue3.innerText = "?";
    const ballRed1 = document.createElement("div");
    ballRed1.classList += "ball red";
    ballRed1.innerText = "?";
    const ballRed2 = document.createElement("div");
    ballRed2.classList += "ball red";
    ballRed2.innerText = "?";
    const ballGrey = document.createElement("div");
    ballGrey.classList += "ball grey";
    ballGrey.innerText = "?";
    const plus = document.createElement("div");
    plus.classList += "plus";
    plus.innerText = "+";
    const ballBonus = document.createElement("div");
    ballBonus.classList += "ball bonus";
    ballBonus.innerText = "?";
    minus.classList += "minus";
    minus.innerText = "-";
    minus.addEventListener("click", function () {
      event.preventDefault();
      minusClick(container);
    });
    container.appendChild(ballBlue1);
    container.appendChild(ballBlue2);
    container.appendChild(ballBlue3);
    container.appendChild(ballRed1);
    container.appendChild(ballRed2);
    container.appendChild(ballGrey);

    container.classList += "numbers";
    container.id = "lotto" + i;

    box.appendChild(container);
  }
});

document.getElementById("btn").addEventListener("click", function () {
  if (tmp === 1) {
    const cnt = document.getElementsByClassName("numbers").length;

    numbers = Array.from({ length: 45 }, (_, i) => i + 1);

    tmp = 0;
    //btn.classList.add("hide");

    lottery();

    setTimeout(function () {
      (tmp = 1), btn.classList.remove("hide");
    }, 1);
  }
});

function minusClick(element) {
  element.remove();
}
