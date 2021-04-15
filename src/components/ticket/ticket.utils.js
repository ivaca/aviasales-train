export const convertMinToHHMM = (mins) => {
  var num = mins;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "ч " + rminutes + "м";
};
export const convertDateToHHMM = (date) => {
  const duration = new Date(date);

  return (
    duration.getHours() +
    ":" +
    (duration.getMinutes() < 10
      ? "0" + duration.getMinutes()
      : duration.getMinutes())
  );
};
export const getTime = (date, duration) => {
  var d = new Date(date);
  d.setMinutes(d.getMinutes() + duration);
  return convertDateToHHMM(date) + "-" + convertDateToHHMM(d);
};
