// count class
// start()
// pause
// reset

class Counter {
  constructor(interval, startVal, endVal) {
    this.interval = interval;
    this.startVal = startVal;
    this.endVal = endVal;
    this.globalCounter = startVal;
    this.globalTimer = null;
  }
  getGlobalCounter() {
    return this.globalCounter;
  }
}

Counter.prototype.start = function() {
  this.globalTimer = setInterval(
    function() {
      console.log("current count: ", this.globalCounter);

      this.globalCounter += 1;
      if (this.globalCounter === this.endVal + 1) {
        clearInterval(this.globalTimer);
      }
    }.bind(this),
    this.interval
  );
};

Counter.prototype.pause = function() {
  clearInterval(this.globalTimer);
};

Counter.prototype.reset = function() {
  clearInterval(this.globalTimer);
  this.globalCounter = this.startVal;
};

let myCounter = new Counter(1000, 1, 10);

// start timer
myCounter.start();

//after 5s, pause the timer for 1s
setTimeout(
  function() {
    myCounter.pause();
  }.bind(myCounter),
  5000
);

// resume where we left off when calling start again

setTimeout(
  function() {
    myCounter.start();
  }.bind(myCounter),
  6000
);

//reset counter state

setTimeout(
  function() {
    myCounter.reset();
  }.bind(myCounter),
  9000
);

//calling start again will start at 0

setTimeout(
  function() {
    myCounter.start();
  }.bind(myCounter),
  10000
);
