class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = selector.targetDate;
    console.log("targetDate", this.targetDate);
    this.daysLeft = document.querySelector('[data-value="days"]');
    this.hoursLeft = document.querySelector('[data-value="hours"]');
    this.minsLeft = document.querySelector('[data-value="mins"]');
    this.secsLeft = document.querySelector('[data-value="secs"]');
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  getTimeRemain() {
    const time = Date.parse(this.targetDate) - Date.parse(new Date()),
      days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24))),
      hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
      secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {
      total: time,
      days,
      hours,
      mins,
      secs,
    };
  }
  start() {
    const timerInterval = setInterval(() => {
    const t = this.getTimeRemain();
    this.daysLeft.innerHTML = t.days;
    this.hoursLeft.innerHTML = t.hours;
    this.minsLeft.innerHTML = t.mins;
    this.secsLeft.innerHTML = t.secs;
      if (t.total <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 10, 2021")
});

timer.start();