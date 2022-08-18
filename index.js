let a = Math.random();

let random1 = Math.floor((a*6) + 1);
console.log(random1);
let randomImage1 = "inverted-dice-" + random1 + ".png";

let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);




let b = Math.random();

let random2 = Math.floor((b*6) + 1);
console.log(random2);
let randomImage2 = "inverted-dice-" + random2 + ".png";

let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);


if(random1 > random2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
if(random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else if(random1 == random2){
    document.querySelector("h1").innerHTML = "Draw!";
}

