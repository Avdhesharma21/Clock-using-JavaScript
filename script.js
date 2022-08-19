days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  month = d.getMonth();
  day = d.getDay();
  date = d.getDate();

  // console.log(Date());
  // console.log(htime);
  // console.log(mtime);
  // console.log(stime);

  hrotation = 30 * htime + mtime / 2 + stime / 120;
  mrotation = 6 * mtime + stime / 10;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minutes.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;

  hoursForClock = htime >= 13 ? htime % 12 : htime;
  ampm = htime >= 12 ? 'PM' : 'AM';
  document.getElementById("time").innerHTML = `${hoursForClock}:${mtime < 10 ? `0${mtime}` : mtime} ${ampm}`;
  document.getElementById("date").innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}, 1000);

toggle = document.getElementById("toggle");

toggle.addEventListener("click", (e) => {
  html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  }
  else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});