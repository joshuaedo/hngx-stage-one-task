// Function to update the current day of the week and UTC time in milliseconds
function updateDayAndUTCTime() {
  const dayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]',
  );
  const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

  const currentDate = new Date();

  dayElement.textContent = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const currentUTCTimeInMilliseconds = currentDate.getTime();
  timeElement.textContent = currentUTCTimeInMilliseconds.toString();
}

updateDayAndUTCTime();

setInterval(updateDayAndUTCTime, 1000);
