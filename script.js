// // Basic functions for an event-driven, procedural-oriented way
// // 2 sets of global variables: the hour/minute/second variables and the return value of the setInterval() function
// // 4 key functions: the event handlers for the start, pause, and stop buttons, and the execution function that is called in a loop during the countdown

// // initialise button state
// document.getElementById("btn-pause").disabled = true;
// document.getElementById("btn-stop").disabled = true;


// // Next, we define global variables to store hour, minute, and second values.

// var timer = null; // store the returned value of timer
// var h = 0; // store the value of hour
// var m = 0; // store the value of minute
// var s = 0; // store the value of second

// // In the start_counting() function which starts the timer, we use document.getElementById().value to get the values of the elements with id of inputh, inputm, and inputs.

// // define a function
// // start the timer
// function start_counting() {
//     // get the time entered or set a default value
//     h = +document.getElementById("inputh").value || h;
//     m = +document.getElementById("inputm").value || m;
//     s = +document.getElementById("inputs").value || s;

//     // check for illegal input
//     if (
//         (h == 0 && m == 0 && s == 0) ||
//         (h < 0 || m < 0 || s < 0)
//     ) {
//         alert("The time entered is illegal!");
//         return;
//     }
// timeHelper();
//     // start the timer
//     // executes counting every 1000 miliseconds (1 second)
//     timer = setInterval(counting, 1000);

//     // change the state of buttons and input fields to prohibit users from re-entering numbers
//     document.getElementById("btn-start").disabled = true;
//     document.getElementById("btn-pause").disabled = false;
//     document.getElementById("btn-stop").disabled = false;
//     document.getElementById("inputh").disabled = true;
//     document.getElementById("inputm").disabled = true;
//     document.getElementById("inputs").disabled = true;
// }

// // pause the timer
// function pause_counting() {
//     // change the state of buttons and input fields to allow users to re-enter numbers
//     document.getElementById("btn-start").disabled = false;
//     document.getElementById("btn-pause").disabled = true;
//     document.getElementById("btn-stop").disabled = false;
//     document.getElementById("inputh").disabled = false;
//     document.getElementById("inputm").disabled = false;
//     document.getElementById("inputs").disabled = false;

//     // pause the timer
//     clearInterval(timer);
// }

// // stop the timer
// function end_counting() {
//     // change the state of buttons and input fields to allow users to re-enter numbers
//     document.getElementById("btn-start").disabled = false;
//     document.getElementById("btn-pause").disabled = true;
//     document.getElementById("btn-stop").disabled = true;
//     document.getElementById("inputh").disabled = false;
//     document.getElementById("inputm").disabled = false;
//     document.getElementById("inputs").disabled = false;

//     // stop the timer
//     clearInterval(timer);

//     // reset the time variables
//     h = 0;
//     m = 0;
//     s = 0;
//     document.getElementById("currentTime").innerHTML = "Timer stopped";
// }

// // countdown
// function counting() {
//     // check if the second is 0
//     if (s == 0) {
//         // check if the minute is 0 when the second is 0
//         if (m == 0) {
//             // the entered time has already been checked for legality before starting the timer, so there is no need to check the value of the variable h again here
//             h--;
//             m = 59;
//             s = 59;
//         } else {
//             // when the minute is not 0, the minute minus 1 and the second becomes 59
//             m--;
//             s = 59;
//         }
//     } else {
//         // when the second is not 0, the second minus 1
//         s--;
//     }

//     // display current time
//     document.getElementById("currentTime").innerHTML = "current time: " + h + " h " + m + " m " + s + " s";
//     document.getElementById("inputh").value = h;
//     document.getElementById("inputm").value = m;
//     document.getElementById("inputs").value = s;

//     // check if the second is 0
//     if (s == 0) {
//         // when the second is 0, check if the minute is 0
//         if (m == 0) {
//             // when the minute is 0, check if the hour is 0
//             if (h == 0) {
//                 // when the hour is 0, stop the timer
//                 // stop the timer
//                 end_counting();
//                 // execute popup in the next event loop to prevent it from blocking DOM rendering
//                 setTimeout(function () {
//                     alert("The time is up!");
//                 }, 0);
//                 return;
//             }
//         }
//     }
// }
// // The event listener method addEventListener() is used here to execute the function when the input event occurs
// // parseInt() is also used to convert the input values to numeric types

// var inputh = document.getElementById("inputh");
// inputh.addEventListener("input", function() { 
//     inputh.value = parseInt(inputh.value||0);
//     if (inputh.value > 24) inputh.value = 24;
//     if (inputh.value < 0) inputh.value = 0;
// });

// var inputm = document.getElementById("inputm");
// inputm.addEventListener("input", function() {
//     inputm.value = parseInt(inputm.value||0);
//     if (inputm.value > 59) inputm.value = 59;
//     if (inputm.value < 0) inputm.value = 0;
// });

// var inputs = document.getElementById("inputs");
// inputs.addEventListener("input", function() {
//     inputs.value = parseInt(inputs.value||0);
//     if (inputs.value > 59) inputs.value = 59;
//     if (inputs.value < 0) inputs.value = 0;
// });

// // When the numbers of hours, minutes, or seconds are a single digit, we can prefix them with 0 by using a regular expression.
// function timeHelper() {

// h = h.toString();
// m = m.toString();
// s = s.toString();
// if (h.match(/^\d$/)) { // If the hour is a single digit, add 0 in the front
//     h = "0" + h;
// }
// if (m.match(/^\d$/)) { // If the minute is a single digit, add 0 in the front
//     m = "0" + m;
// }
// if (s.match(/^\d$/)) { // If the second is a single digit, add 0 in the front
//     s = "0" + s;
// }
// }

// //OO JS

// class Timmer {
//     constructor() {
//         this.name = 'undefined';
//         this.timmer = undefined;
//         this.h = 0;
//         this.m = 0;
//         this.s = 10;

//         this._on_update_callback = undefined;
//         this._on_stop_callback = undefined;
//     }

//     _on_update() {

//     }

//     start() {

//     }

//     stop() {

//     }

//     pause() {

//     }

//     show() {

//     }


// _on_update() { 
//     if (0 === this.h && 0 === this.m && 0 === this.s) {
//         this.stop();
//         return;
//     } else if (0 === this.s) {
//         this.s = 59;
//         if (0 === this.m) {
//             this.m = 59;
//             this.h = this.h - 1;
//         } else {
//             this.m = this.m - 1;
//         }
//     } else {
//         this.s = this.s - 1;
//     }

//     this.show();
//     if (0 === this.h && 0 === this.m && 0 === this.s) {
//         this.stop();
//     }

//     // call the external callback function if it exists
//     if (this._on_update_callback && typeof this._on_update_callback === 'function') {
//         this._on_update_callback();
//     }
// }

// start() {
//     if (this.timmer) {
//         console.log(`[${this.name}] started`);
//         return;
//     }
//     console.log(`[${this.name}] starts`);
//     this.timmer = setInterval(() => {
//         this._on_update();
//     }, 1000);
//     this.show();
// }

// stop() {
//     console.log(`[${this.name}] stopped`);
//     clearInterval(this.timmer);
//     this.timmer = undefined;

//     // smiliar to update, check for the stop callback function
//     if (this._on_stop_callback && typeof this._on_stop_callback === 'function') {
//         this._on_stop_callback();
//     }
// }

// pause() {
//     console.log(`[${this.name}] paused`);
//     clearInterval(this.timmer);
//     this.timmer = undefined;
// }

// show() { // display the current time
//     console.log(`[${this.name}] current time: ${this.h}:${this.m}:${this.s}`);
// }
// }
// const t1 = new Timmer();
// t1.name = 'Timer 1';
// const t2 = new Timmer();
// t2.name = 'Timer 2';
// const list_timmer = [t1, t2];
// const list_sound = ['meow', 'woof'];

// function play_audio(sound) {
//     // meow.mp3 and woof.mp3 are local files and should be in the same directory with HTML file
//     const audio = document.createElement('audio');
//     audio.src = `${sound}.mp3`;
//     audio.play();
// }

// function btn_start_onclick(i) {
//     // get the input value
//     const ipt_h = document.getElementById(`ipt-${i}-h`);
//     const ipt_m = document.getElementById(`ipt-${i}-m`);
//     const ipt_s = document.getElementById(`ipt-${i}-s`);

//     // set the state of input fields and buttons
//     dom_update_inputs(i, "COUNTING");
//     // take the corresponding timer from the timer array
//     const tmr = list_timmer[i - 1];
//     // assign the input value to timer
//     tmr.h = Number(ipt_h.value);
//     tmr.m = Number(ipt_m.value);
//     tmr.s = Number(ipt_s.value);

//     // set the callback function
//     tmr._on_stop_callback = () => {
//         // play the sound
//         play_audio(list_sound[i - 1]);
//         // set the state of input fields and buttons
//         dom_update_inputs(i, "STOPPED");
//     }
//     tmr._on_update_callback = () => {
//         dom_update_timmer(i);
//     }
//     // start the timer
//     tmr.start();
// }

// function btn_pause_onclick(i) {
//     dom_update_inputs(i, "PAUSED");

//     // take the corresponding timer from the timer array
//     const tmr = list_timmer[i - 1];

//     // pause the timer
//     tmr.pause();
// }

// function btn_stop_onclick(i) {
//     dom_update_inputs(i, "STOPED");

//     // take the corresponding timer from the timer array
//     const tmr = list_timmer[i - 1];


//     // stop the timer
//     tmr.stop();
// }

// function dom_update_inputs(i, status) {
//     if ('COUNTING' === status) {
//         // set the state of input fields
//         document.getElementById(`ipt-${i}-h`).disabled = true;
//         document.getElementById(`ipt-${i}-m`).disabled = true;
//         document.getElementById(`ipt-${i}-s`).disabled = true;

//         // set the state of buttons
//         document.getElementById(`tmr-${i}-btn-start`).disabled = true;
//         document.getElementById(`tmr-${i}-btn-pause`).disabled = false;
//         document.getElementById(`tmr-${i}-btn-stop`).disabled = false;
//     } else if ('PAUSED' === status) {
//         // set the state of input fields
//         document.getElementById(`ipt-${i}-h`).disabled = false;
//         document.getElementById(`ipt-${i}-m`).disabled = false;
//         document.getElementById(`ipt-${i}-s`).disabled = false;

//         // set the state of buttons
//         document.getElementById(`tmr-${i}-btn-start`).disabled = false;
//         document.getElementById(`tmr-${i}-btn-pause`).disabled = true;
//         document.getElementById(`tmr-${i}-btn-stop`).disabled = false;
//     } else if ('STOPPED' === status) {
//         // set the state of input fields
//         document.getElementById(`ipt-${i}-h`).disabled = false;
//         document.getElementById(`ipt-${i}-m`).disabled = false;
//         document.getElementById(`ipt-${i}-s`).disabled = false;

//         // set the state of buttons
//         document.getElementById(`tmr-${i}-btn-start`).disabled = false;
//         document.getElementById(`tmr-${i}-btn-pause`).disabled = true;
//         document.getElementById(`tmr-${i}-btn-stop`).disabled = true;
//     }
// }

// function dom_update_timmer(i) {
//     // take the corresponding timer from the timer array
//     const tmr = list_timmer[i - 1];

//     // synchronize the time to the page
//     document.getElementById(`ipt-${i}-h`).value = tmr.h;
//     document.getElementById(`ipt-${i}-m`).value = tmr.m;
//     document.getElementById(`ipt-${i}-s`).value = tmr.s;
// } 

// // Event generator - when the timer's state changes, it notifies the buttons on the page so that the buttons' states change in sync.
// // new class EventEmitter, which is an event emitter used to implement the event mechanism
// // on is used to listen (subscribe) to events. When an event occurs, a callback function is executed, and the parameters of the callback function are the parameters of the event. this in the callback function refers to the trigger of the event.

// class EventEmitter {
//     constructor() {
//         this._events = {};
//     }

//     on(type, listener) {
//         if (this._events[type]) {
//             this._events[type].push(listener);
//         } else {
//             this._events[type] = [listener];
//         }
//     }

//     emit(type, ...args) {
//         if (this._events[type]) {
//             this._events[type].forEach(listener => {
//                 listener(...args);
//             });
//         }
//     }

//     removeListener(type, listener) {
//         if (this._events[type] && listener) {
//             this._events[type] = this._events[type].filter(l => l !== listener);
//         } else if (this._events[type] && !listener) {
//             this._events[type] = [];
//         }
//     }
// }

// class Timmer extends EventEmitter {
//     constructor() {
//         super();
//         this.name = 'undefined';
//         this.timmer = undefined;
//         this.h = 0;
//         this.m = 0;
//         this.s = 10;
//     }

//     _on_update() {
//         if (0 === this.h && 0 === this.m && 0 === this.s) {
//             this.stop();
//             return;
//         } else if (0 === this.s) {
//             this.s = 59;
//             if (0 === this.m) {
//                 this.m = 59;
//                 this.h = this.h - 1;
//             } else {
//                 this.m = this.m - 1;
//             }
//         } else {
//             this.s = this.s - 1;
//         }

//         this.show()
//         // emit an event
//         this.emit('update', {
//             h: this.h,
//             m: this.m,
//             s: this.s
//         });
//         if (0 === this.h && 0 === this.m && 0 === this.s) {
//             this.stop();
//         }
//     }

//     start() {
//         if (this.timmer) {
//             console.log(`[${this.name}] started`);
//             return;
//         }
//         console.log(`[${this.name}] starts`);
//         this.timmer = setInterval(() => {
//             this._on_update();
//         }, 1000);
//         this.show();

//         // emit an event
//         this.emit('start', {
//             h: this.h,
//             m: this.m,
//             s: this.s
//         });
//     }

//     stop() {
//         console.log(`[${this.name}] stoped`);
//         clearInterval(this.timmer);
//         this.timmer = undefined;

//         // emit an event
//         this.emit('stop', {
//             h: this.h,
//             m: this.m,
//             s: this.s
//         });
//     }

//     pause() {
//         console.log(`[${this.name}] paused`);
//         clearInterval(this.timmer);
//         this.timmer = undefined;

//         // emit an event
//         this.emit('pause', {
//             h: this.h,
//             m: this.m,
//             s: this.s
//         });
//     }

//     show() {
//         console.log(`[${this.name}]current time: ${this.h}:${this.m}:${this.s}`);
//     }
// }

// const t1 = new Timmer();
// t1.name = 'Timer 1';
// const t2 = new Timmer();
// t2.name = 'Timer 2';
// // const list_timmer = [t1, t2];
// // const list_sound = ['meow', 'woof'];
// const list_sound_str = ['🐱meow~~~', '🐶woof~woof~woof~'];

class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(type, listener) {
        if (this._events[type]) {
            this._events[type].push(listener);
        } else {
            this._events[type] = [listener];
        }
    }

    emit(type, ...args) {
        if (this._events[type]) {
            this._events[type].forEach(listener => {
                listener(...args);
            });
        }
    }

    removeListener(type, listener) {
        if (this._events[type] && listener) {
            this._events[type] = this._events[type].filter(l => l !== listener);
        } else if (this._events[type] && !listener) {
            this._events[type] = [];
        }
    }
}

class Timmer extends EventEmitter {
    constructor() {
        super();
        this.name = 'undefined';
        this.timmer = undefined;
        this.h = 0;
        this.m = 0;
        this.s = 10;
    }

    _on_update() {
        if (0 === this.h && 0 === this.m && 0 === this.s) {
            this.stop();
            return;
        } else if (0 === this.s) {
            this.s = 59;
            if (0 === this.m) {
                this.m = 59;
                this.h = this.h - 1;
            } else {
                this.m = this.m - 1;
            }
        } else {
            this.s = this.s - 1;
        }

        this.show()
        // emit an event
        this.emit('update', {
            h: this.h,
            m: this.m,
            s: this.s
        });
        if (0 === this.h && 0 === this.m && 0 === this.s) {
            this.stop();
        }
    }

    start() {
        if (this.timmer) {
            console.log(`[${this.name}] started`);
            return;
        }
        console.log(`[${this.name}] starts`);
        this.timmer = setInterval(() => {
            this._on_update();
        }, 1000);
        this.show();

        // emit an event
        this.emit('start', {
            h: this.h,
            m: this.m,
            s: this.s
        });
    }

    stop() {
        console.log(`[${this.name}] stoped`);
        clearInterval(this.timmer);
        this.timmer = undefined;

        // emit an event
        this.emit('stop', {
            h: this.h,
            m: this.m,
            s: this.s
        });
    }

    pause() {
        console.log(`[${this.name}] paused`);
        clearInterval(this.timmer);
        this.timmer = undefined;

        // emit an event
        this.emit('pause', {
            h: this.h,
            m: this.m,
            s: this.s
        });
    }

    show() {
        console.log(`[${this.name}]current time: ${this.h}:${this.m}:${this.s}`);
    }
}

const t1 = new Timmer();
t1.name = 'Timer 1';
const t2 = new Timmer();
t2.name = 'Timer 2';
const list_timmer = [t1, t2];
const list_sound = ['miao', 'wang'];
const list_sound_str = ['🐱meow~~~', '🐶woof~woof~woof~'];


function play_audio(sound) {
    const audio = document.createElement('audio');
    audio.src = `${sound}.mp3`;
    audio.play();
}

function btn_start_onclick(i) {
    // get the input value
    const ipt_h = document.getElementById(`ipt-${i}-h`);
    const ipt_m = document.getElementById(`ipt-${i}-m`);
    const ipt_s = document.getElementById(`ipt-${i}-s`);

    // set the state of input fields and buttons
    dom_update_inputs(i, "COUNTING");

    // take the corresponding timer from the timer array
    const tmr = list_timmer[i - 1];
    // assign the input value to the timer
    tmr.h = Number(ipt_h.value);
    tmr.m = Number(ipt_m.value);
    tmr.s = Number(ipt_s.value);

    // listen to timer's update event and synchronize the time to the page
    tmr.removeListener('update');
    tmr.removeListener('stop');
    tmr.on('update', () => dom_update_timmer(i));
    tmr.on('stop', () => {
        console.log(list_sound_str[i - 1]);
    });
    tmr.on('stop', () => {
        // play the sound
        play_audio(list_sound[i - 1]);
        // set the state of input fields and buttons
        dom_update_inputs(i, "STOPPED");
    });

    // start the timer
    tmr.start();
}
function btn_pause_onclick(i) {
    dom_update_inputs(i, "PAUSED");

    // take the corresponding timer from the timer array
    const tmr = list_timmer[i - 1];

    // pause the timer
    tmr.pause();
}

function btn_stop_onclick(i) {
    dom_update_inputs(i, "STOPED");

    // take the corresponding timer from the timer array
    const tmr = list_timmer[i - 1];


    // stop the timer
    tmr.stop();
}

function dom_update_inputs(i, status) {
    if ('COUNTING' === status) {
        // set the state of input fields
        document.getElementById(`ipt-${i}-h`).disabled = true;
        document.getElementById(`ipt-${i}-m`).disabled = true;
        document.getElementById(`ipt-${i}-s`).disabled = true;

        // set the state of buttons
        document.getElementById(`tmr-${i}-btn-start`).disabled = true;
        document.getElementById(`tmr-${i}-btn-pause`).disabled = false;
        document.getElementById(`tmr-${i}-btn-stop`).disabled = false;
    } else if ('PAUSED' === status) {
        // set the state of input fields
        document.getElementById(`ipt-${i}-h`).disabled = false;
        document.getElementById(`ipt-${i}-m`).disabled = false;
        document.getElementById(`ipt-${i}-s`).disabled = false;

        // set the state of buttons
        document.getElementById(`tmr-${i}-btn-start`).disabled = false;
        document.getElementById(`tmr-${i}-btn-pause`).disabled = true;
        document.getElementById(`tmr-${i}-btn-stop`).disabled = false;
    } else if ('STOPPED' === status) {
        // set the state of input fields
        document.getElementById(`ipt-${i}-h`).disabled = false;
        document.getElementById(`ipt-${i}-m`).disabled = false;
        document.getElementById(`ipt-${i}-s`).disabled = false;

        // set the state of buttons
        document.getElementById(`tmr-${i}-btn-start`).disabled = false;
        document.getElementById(`tmr-${i}-btn-pause`).disabled = true;
        document.getElementById(`tmr-${i}-btn-stop`).disabled = true;
    }
}

function dom_update_timmer(i) {
    // take the corresponding timer from the timer array
    const tmr = list_timmer[i - 1];

    // show the time on the page
    document.getElementById(`ipt-${i}-h`).value = tmr.h;
    document.getElementById(`ipt-${i}-m`).value = tmr.m;
    document.getElementById(`ipt-${i}-s`).value = tmr.s;
} 