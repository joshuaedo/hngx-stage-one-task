  function updateTimeAndDay() {
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    const currentDate = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };

    timeElement.textContent = currentDate.toLocaleDateString('en-US', options);

    dayElement.textContent = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  }

  updateTimeAndDay();

  setInterval(updateTimeAndDay, 1000);