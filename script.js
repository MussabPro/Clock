setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  date = d.getDate();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;
  hours.style.transform = `rotate(${hrotation}deg)`;
  minutes.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
  if (1 <= date && date <= 9)
    document.querySelector("#date").innerHTML = "0" + String(date);
  else document.querySelector("#date").innerHTML = String(date);
}, 1000);
