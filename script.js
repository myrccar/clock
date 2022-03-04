function set_time() {
  let today = new Date();
  let hours = today.getHours();
  let am_pm = "idk";
  if (hours > 12){
    hours -= 12;
    am_pm = "PM";
  }
  else{
    am_pm = "AM";
  }
  let min = today.getMinutes();
  if(min < 10){
    min = "0"+min;
  }
  let sec = today.getSeconds();
  if(sec < 10){
    sec = "0"+sec;
  }
  document.getElementById('time_out').innerHTML = hours+":"+min+":"+sec+" "+am_pm;
  document.title = "online clock: "+hours+":"+min+":"+sec+" "+am_pm;
}

function int_clock() {
  set_time();
}

setInterval(()=>{
  set_time();
});


