// Basic functions for an event-driven, procedural-oriented way
// 2 sets of global variables: the hour/minute/second variables and the return value of the setInterval() function
// 4 key functions: the event handlers for the start, pause, and stop buttons, and the execution function that is called in a loop during the countdown

// initialise button state
document.getElementById("btn-pause").disabled = true;
document.getElementById("btn-stop").disabled = true;


// Next, we define global variables to store hour, minute, and second values.

var timer = null; // store the returned value of timer
var h = 00; // store the value of hour
var m = 00; // store the value of minute
var s = 00; // store the value of second

// In the start_counting() function which starts the timer, we use document.getElementById().value to get the values of the elements with id of inputh, inputm, and inputs.

// define a function
// start the timer
function start_counting() {
    // get the time entered or set a default value
    h = +document.getElementById("inputh").value || h;
    m = +document.getElementById("inputm").value || m;
    s = +document.getElementById("inputs").value || s;

    // check for illegal input
    if (
        (h == 0 && m == 0 && s == 0) ||
        (h < 0 || m < 0 || s < 0)
    ) {
        alert("The time entered is not valid!");
        return;
    }
timeHelper();
    // start the timer
    // executes counting every 1000 miliseconds (1 second)
    timer = setInterval(counting, 1000);

    // change the state of buttons and input fields to prohibit users from re-entering numbers
    document.getElementById("btn-start").disabled = true;
    document.getElementById("btn-pause").disabled = false;
    document.getElementById("btn-stop").disabled = false;
    document.getElementById("inputh").disabled = true;
    document.getElementById("inputm").disabled = true;
    document.getElementById("inputs").disabled = true;
}

// pause the timer
function pause_counting() {
    // change the state of buttons and input fields to allow users to re-enter numbers
    document.getElementById("btn-start").disabled = false;
    document.getElementById("btn-pause").disabled = true;
    document.getElementById("btn-stop").disabled = false;
    document.getElementById("inputh").disabled = false;
    document.getElementById("inputm").disabled = false;
    document.getElementById("inputs").disabled = false;

    // pause the timer
    clearInterval(timer);
}

// stop the timer
function end_counting() {
    // change the state of buttons and input fields to allow users to re-enter numbers
    document.getElementById("btn-start").disabled = false;
    document.getElementById("btn-pause").disabled = true;
    document.getElementById("btn-stop").disabled = true;
    document.getElementById("inputh").disabled = false;
    document.getElementById("inputm").disabled = false;
    document.getElementById("inputs").disabled = false;

    // stop the timer
    clearInterval(timer);

    // reset the time variables
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("currentTime").innerHTML = "Timer stopped";
}

// pause the timer
function clear_counting() {
    // change the state of buttons and input fields to allow users to re-enter numbers
    document.getElementById("btn-start").disabled = false;
    document.getElementById("btn-pause").disabled = true;
    document.getElementById("btn-stop").disabled = true;
    document.getElementById("inputh").value = 00;
    document.getElementById("inputm").value = 00;
    document.getElementById("inputs").value = 00;

    // pause the timer
    clearInterval(timer);
    clearTimeout(timer);
    document.getElementById("currentTime").innerHTML = "Timer cleared";
}

// countdown
function counting() {
    // check if the second is 0
    if (s == 0) {
        // check if the minute is 0 when the second is 0
        if (m == 0) {
            // the entered time has already been checked for legality before starting the timer, so there is no need to check the value of the variable h again here
            h--;
            m = 59;
            s = 59;
        } else {
            // when the minute is not 0, the minute minus 1 and the second becomes 59
            m--;
            s = 59;
        }
    } else {
        // when the second is not 0, the second minus 1
        s--;
    }

    // display current time
    document.getElementById("currentTime").innerHTML = "Current Time: " + h + " h " + m + " m " + s + " s";
    document.getElementById("inputh").value = h;
    document.getElementById("inputm").value = m;
    document.getElementById("inputs").value = s;

    // check if the second is 0
    if (s == 0) {
        // when the second is 0, check if the minute is 0
        if (m == 0) {
            // when the minute is 0, check if the hour is 0
            if (h == 0) {
                // when the hour is 0, stop the timer
                // stop the timer
                end_counting();
                // execute popup in the next event loop to prevent it from blocking DOM rendering
                setTimeout(function () {
                    alert("The time is up!");
                }, 0);
                return;
            }
        }
    }
}
// The event listener method addEventListener() is used here to execute the function when the input event occurs
// parseInt() is also used to convert the input values to numeric types

var inputh = document.getElementById("inputh");
inputh.addEventListener("input", function() { 
    inputh.value = parseInt(inputh.value||0);
    if (inputh.value > 24) inputh.value = 24;
    if (inputh.value < 0) inputh.value = 0;
});

var inputm = document.getElementById("inputm");
inputm.addEventListener("input", function() {
    inputm.value = parseInt(inputm.value||0);
    if (inputm.value > 59) inputm.value = 59;
    if (inputm.value < 0) inputm.value = 0;
});

var inputs = document.getElementById("inputs");
inputs.addEventListener("input", function() {
    inputs.value = parseInt(inputs.value||0);
    if (inputs.value > 59) inputs.value = 59;
    if (inputs.value < 0) inputs.value = 0;
});

// When the numbers of hours, minutes, or seconds are a single digit, we can prefix them with 0 by using a regular expression.
function timeHelper() {

h = h.toString();
m = m.toString();
s = s.toString();
if (h.match(/^\d$/)) { // If the hour is a single digit, add 0 in the front
    h = "0" + h;
}
if (m.match(/^\d$/)) { // If the minute is a single digit, add 0 in the front
    m = "0" + m;
}
if (s.match(/^\d$/)) { // If the second is a single digit, add 0 in the front
    s = "0" + s;
}
}

