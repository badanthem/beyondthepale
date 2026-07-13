// Live clock for Ceefax header
function updateTime() {
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var now = new Date();
  var d = days[now.getDay()];
  var day = String(now.getDate()).padStart(2, '0');
  var m = months[now.getMonth()];
  var h = String(now.getHours()).padStart(2, '0');
  var min = String(now.getMinutes()).padStart(2, '0');
  var el = document.getElementById('ceefax-time');
  if (el) el.textContent = d + ' ' + day + ' ' + m + ' ' + h + ':' + min;
}
updateTime();
setInterval(updateTime, 1000);
