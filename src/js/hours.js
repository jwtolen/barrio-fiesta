/** Hours helpers — easy for owner updates via site-config.js */

export function getTodayHours(site) {
  const now = new Date();
  const day = now.getDay(); // 0 Sun ... 6 Sat
  const isWeekend = day === 5 || day === 6;
  const schedule = isWeekend ? site.hours.weekend : site.hours.weekday;
  const [openH, openM] = schedule.open.split(':').map(Number);
  const [closeH, closeM] = schedule.close.split(':').map(Number);

  const openDate = new Date(now);
  openDate.setHours(openH, openM, 0, 0);
  const closeDate = new Date(now);
  closeDate.setHours(closeH, closeM, 0, 0);

  const openNow = now >= openDate && now < closeDate;

  return {
    label: schedule.label,
    display: schedule.display,
    openNow,
    isWithinDay: true,
  };
}

export function starString(n = 5) {
  const full = Math.round(n);
  return '★'.repeat(Math.max(0, Math.min(5, full)));
}
