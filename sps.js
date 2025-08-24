let text=document.querySelector(".champ");
let stone = document.querySelector("#stone1");
let paper = document.querySelector("#paper2");
let seissor = document.querySelector("#seissor3");
let youscore = document.querySelector("#youscore");
let compscore = document.querySelector("#compscore");
let styou = 0;
let stcomp = 0;
let arr = ["stone", "paper", "seissor"];
const computerchoice = (arr) => {
    let random = arr[Math.floor(Math.random() * 3)];
    return random;
}
stone.addEventListener("click", () => {
    let ran = computerchoice(arr);
    if (ran === "stone") {
        text.innerHTML="You choose stone,Its a draw";
    }
    if (ran === "paper") {
        text.innerHTML="You loose,paper beat stone";
        stcomp += 1;
        compscore.innerHTML = stcomp;
    }
    else {
       text.innerHTML="You won,stone beat seissor";
        styou += 1;
        youscore.innerHTML = styou;
    }

})
paper.addEventListener("click", () => {
    let ran = computerchoice(arr);
    if (ran === "paper") {
       text.innerHTML="You choose paper,Its a draw";
    }
    if (ran === "stone") {
       text.innerHTML="You won,paper beat stone";
        styou += 1;
        youscore.innerHTML = styou;
    }
    else {
      text.innerHTML="You loose,seissor beat paper";
        stcomp += 1;
        compscore.innerHTML = stcomp;
    }
})
seissor.addEventListener("click", () => {
    let ran = computerchoice(arr);
    if (ran === "seissor") {
       text.innerHTML="You choose seissor,Its a draw";
    }
    if (ran === "paper") {
       text.innerHTML="You won,seissor beat paper";
        styou += 1;
        youscore.innerHTML = styou;
    }
    else {
        text.innerHTML="You loose,stone beat seissor";
        stcomp += 1;
        compscore.innerHTML = stcomp;
    }
})