// // // var [seconds, minutes ,hours]=[0,0,0];
// // // var displayTime =document.getElementById("displayTime");
// // // var timer = null;
// // // function  stopwatch(){
// // //     seconds++;
// // //     if(seconds == 60){
// // //         seconds == 0;
// // //         minutes++;
// // //         if(minutes == 60){
// // //             minutes = 0;
// // //             hours++;
            
// // //         }

// // //     }

// // //     var h = hours < 10 ? "0" + hours + hours;
// // //     var m = minutes < 10 ? "0" + minutes  + minutes ;
// // //     var s = seconds < 10 ? "0" + seconds + seconds ;
   
   
// // //     displayTime.innerHTML = h+":"+m+":" +s;
// // // }

// // // function wacthStart(){
// // //     if(timer!==null)
// // //     {
// // //         clearInterval(timer)
// // //     }
// // //     timer = setInterval(stopwatch,1000);
// // // }
// // //  function wacthStop(){
// // //     clearInterval(timer)
// // //  }
// // //  function resetStop(){
// // //     clearInterval(timer)
// // //     [seconds, minutes ,hours]=[0,0,0];
// // //     displayTime.innerHTML = "00:00:00";
// // //  }



// // let seconds = 0, minutes = 0, hours = 0;
// // const displayTime = document.getElementById("displayTime");
// // let timer = null;

// // function formatTime(unit) {
// //     return unit < 10 ? `0${unit}` : unit;
// // }

// // function updateDisplay() {
// //     displayTime.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
// // }

// // function stopwatch() {
// //     seconds++;
// //     if (seconds === 60) {
// //         seconds = 0;
// //         minutes++;
// //         if (minutes === 60) {
// //             minutes = 0;
// //             hours++;
// //         }
// //     }
// //     updateDisplay();
// // }

// // function watchStart() {
// //     if (timer === null) {
// //         timer = setInterval(stopwatch, 1000);
// //     }
// // }

// // function watchStop() {
// //     clearInterval(timer);
// //     timer = null; // Reset timer to null when stopped
// // }

// // function resetStop() {
// //     watchStop(); // Stop the timer if running
// //     seconds = 0;
// //     minutes = 0;
// //     hours = 0;
// //     updateDisplay(); // Reset display
// // }
// let seconds = 0, minutes = 0, hours = 0;
// const displayTime = document.getElementById("displayTime");
// let timer = null;

// function formatTime(unit) {
//   return unit < 10 ? `0${unit}` : unit;
// }

// function updateDisplay() {
//   displayTime.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
// }

// function stopwatch() {
//   seconds++;
//   if (seconds === 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes === 60) {
//       minutes = 0;
//       hours++;
//     }
//   }
//   updateDisplay();
// }

// function watchStart() {
//   if (timer === null) {
//     timer = setInterval(stopwatch, 1000);
//   }
// }

// function watchStop() {
//   if (timer !== null) {
//     clearInterval(timer);
//     timer = null;
//   }
// }

// function resetStop() {
//   watchStop();
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   updateDisplay();
// }



let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}