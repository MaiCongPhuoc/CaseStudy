let chargeNokia = false;

document.querySelector('.nokia .txt-battery').innerHTML = nokia.getBattery() + "%";
document.querySelector('.nokia .charging').style.display = 'none';
setBatterColor(nokia, ".nokia");

function switchChargeNO() {
	if(chargeNokia == false) {
		document.getElementById('toggleChargeNO').checked;
		chargeNokia = true;
		turnChargeNO();
		document.querySelector('.nokia .charged').style.display = 'none';
		document.querySelector('.nokia .charging').style.display = 'block';
	}
	else {
		chargeNokia = false;
		clearInterval(onChargeNO);
		document.querySelector('.nokia .charged').style.display = 'block';
		document.querySelector('.nokia .charging').style.display = 'none';
		setBatterColor(nokia, ".nokia");
	}
}

function turnChargeNO(){
	this.onChargeNO = setInterval(function(){
		nokia.setChargeBattery();
		let txtBattery = document.querySelector('.nokia .txt-battery');
		txtBattery.innerHTML = nokia.getBattery() + '%';
	}, 1000);
}

function setBatterColor(deviceName, id) {
	if (deviceName.getBattery() <= 20) {
		document.querySelector(id + " .charged").style.backgroundColor = "red";
	}
	else {
		document.querySelector(id + " .charged").style.backgroundColor = "#43c743";
	}
	let batteryPercent = deviceName.getBattery() * 27 / 100 + "px";
	document.querySelector(id + " .charged").style.width = batteryPercent;
}