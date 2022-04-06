// Selecting common parent elements of the all buttons
const timeBoxEl = document.querySelector(".time-box");
const button = document.querySelectorAll(".btn");

// Selecting each tile element
const containerWorkEl = document.querySelector(".container-work");
const containerPlayEl = document.querySelector(".container-play");
const containerStudyEl = document.querySelector(".container-study ");
const containerExcerciseEl = document.querySelector(".container-exercise");
const containerSocialEl = document.querySelector(".container-social");
const containerCareEl = document.querySelector(".container-care");

// HELPER FUNCTIONS
const chagingValue = function (inputEl, catego, time) {
  const current = inputEl.querySelector(".hours");
  const lastWeek = inputEl.querySelector(".ago");

  current.textContent = catego[time].current + "hrs";
  lastWeek.textContent = `Last Week - ${catego[time].previous}hrs`;
};

//  Handeling chaing values
const workOut = async function () {
  const response = await fetch("./data.json");

  // Storing data from json file into variable
  const [
    { timeframes: work },
    { timeframes: play },
    { timeframes: study },
    { timeframes: exercise },
    { timeframes: social },
    { timeframes: care },
  ] = await response.json();

  // HELPER FUNCTION
  const changingPeriodValues = function (time) {
    chagingValue(containerWorkEl, work, time);
    chagingValue(containerPlayEl, play, time);
    chagingValue(containerStudyEl, study, time);
    chagingValue(containerExcerciseEl, exercise, time);
    chagingValue(containerSocialEl, social, time);
    chagingValue(containerCareEl, care, time);
  };

  // Setting values
  timeBoxEl.addEventListener("click", function (e) {
    if (e.target.matches(".btn")) {
      const btn = e.target;

      // setting daily buttons value
      if (btn.textContent === "Daily") {
        button.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
        changingPeriodValues("daily");
      }

      // setting weekly button value
      if (btn.textContent === "Weekly") {
        button.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
        changingPeriodValues("weekly");
      }

      // setting weekly monthly value
      if (btn.textContent === "Monthly") {
        button.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
        changingPeriodValues("monthly");
      }
    }
  });
};

workOut();
