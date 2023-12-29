let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#newGame");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let main = document.querySelector("main");

let turnO = true; //player

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
    main.style.display = "block";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();

  });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// const gameDraw = ()  => {
//   msgCont.classList.remove("hide");
//   msg.innerText = "Game is Drawn, Play Again";
  
// }

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    main.style.display = "none";
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);
