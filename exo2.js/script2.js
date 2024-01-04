let times = 1;

function temps() {
    console.log(times); 
    document.getElementById("Temps").innerHTML = times; 
    times++;
}

let minute = 1;
let min = "minute est écoulée";
let minutes = 2;
let min2 = "minutes sont écoulées";

function moreTimes(){
    if (minute < 2){
        console.log(minute + " " + min);
        document.getElementById("Min").innerHTML = minute + " " + min;
        minute = minute + 1;
    }else {
        console.log(minutes + " " + min2);
        document.getElementById("Min").innerHTML = minutes + " " + min2;
        minutes = minutes + 1;
    }


}


setInterval(temps, 1000);
setInterval(moreTimes, 60000);


// let phrase = "une minute est écoulée"
// function afficher(){
//     console.log(phrase);
//     document.getElementById("phrase").innerHTML = phrase;
// }
// setTimeout(afficher, 6000);

// setTimeout(function () {
//     document.getElementById('phrase').innerHTML = '';
// }, 7000);

// let minutes = "deux minutes se sont écoulées";
// function min2(){
//     console.log(minutes);
//     document.getElementById("phrase2").innerHTML = minutes;
// }

// setTimeout(min2, 8000);

