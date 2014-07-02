function toStamp(date) {
	var datestr = "";
	datestr += date.getFullYear();
	if (((date.getMonth()+1).toString().length) == 1) {
		datestr += "-0" + (date.getMonth() + 1);
	}
	else {
		datestr += "-" + (date.getMonth() + 1);
	}
	if ((date.getDate().toString().length) == 1) {
		datestr += "-0" + date.getDate();
	}
	else {
		datestr += "-" + date.getDate();	
	}
	if ((date.getHours().toString().length) == 1) {
		datestr += " 0" + date.getHours();
	}
	else {
		datestr += " " + date.getHours();	
	}
	if ((date.getMinutes().toString().length) == 1) {
		datestr += ":0" + date.getMinutes();
	}
	else {
		datestr += ":" + date.getMinutes();	
	} 						
	if ((date.getSeconds().toString().length) == 1) {
		datestr += ":0" + date.getSeconds();
	}
	else {
		datestr += ":" + date.getSeconds();	
	}
	return datestr;
}