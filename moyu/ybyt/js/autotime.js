var week = new Date().getDay(); 
var day = new Date(); time = day.getHours(); min=day.getMinutes();
var year = day.getFullYear();
var date = day.getDate();
if (date < 10)
date="0"+date
var month = day.getMonth() + 1;
if (month < 10)
month="0"+month
if (time < 1)
var time = day.getHours()
if (time < 10)
time="0"+time

if (week == 5 && time < 20)
{
	var date = day.getDate();
now =  year+"年"+month+"月"+date+"日 20:00开放"
}
else if (week == 2 && time < 20)
{
var date = day.getDate();
now =  year+"年"+month+"月"+date+"日 "+time+":"
if (min >= 30)
now=now+"30开放"
else
now=now+"00开放"
}
else{
var date = day.getDate();
now =  year+"年"+month+"月"+date+"日 "+time+":"
if (min >= 30)
now=now+"30开放"
else
now=now+"00开放"}

