let tmp = 1;
let numbers;
const input_form = document.getElementById("input_form");
const price = document.getElementById("price");
const box = document.getElementById("box");
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
  }, time * 1000 + 1000);
}

function lottery() {
  document.querySelectorAll(".ball").forEach((element, index) => {
    element.classList.remove("done");
    decryptEffect(element, index);
  });
}

document.getElementById("input").addEventListener("click", function () {
  event.preventDefault();

  const cnt = price.value / 1000;
  for (var i = 0; i < cnt; i++) {
    const container = document.createElement("div");
    const minus     = document.createElement("div");
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
    minus.onClick = minusClick("lotto" + 1);
    container.appendChild(ballBlue1);
    container.appendChild(ballBlue2);
    container.appendChild(ballBlue3);
    container.appendChild(ballRed1);
    container.appendChild(ballRed2);
    container.appendChild(ballGrey);
    container.appendChild(plus);
    container.appendChild(ballBonus);
    container.appendChild(minus);
    container.classList += "numbers";
    container.id = "lotto" + i;
    
    
    box.appendChild(container);
  }
});

document.getElementById("btn").addEventListener("click", function () {
  if (tmp === 1) {
    const cnt = price.value / 1000;
    numbers = Array.from({ length: 45 }, (_, i) => i + 1);
    tmp = 0;
    btn.classList.add("hide");
    lottery();
    setTimeout(function () {
      (tmp = 1), btn.classList.remove("hide");
    }, 7500 * cnt);
  }
});

function minusClick(id) {
  const element = document.getElementById(id);
  element.remove();
}
