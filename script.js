(() => {
  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const countdown = document.querySelector("[data-graduation]");
  if (!countdown) return;

  const deadline = new Date(countdown.dataset.graduation).getTime();
  const fields = {
    days: countdown.querySelector('[data-count="days"]'),
    hours: countdown.querySelector('[data-count="hours"]'),
    minutes: countdown.querySelector('[data-count="minutes"]'),
    seconds: countdown.querySelector('[data-count="seconds"]')
  };

  const update = () => {
    const remaining = Math.max(0, deadline - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60
    };
    Object.entries(values).forEach(([key, value]) => {
      if (fields[key]) fields[key].textContent = String(value).padStart(2, "0");
    });
  };

  update();
  window.setInterval(update, 1000);
})();