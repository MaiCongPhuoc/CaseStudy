
let onChargeNO;
let checkBatteryNO = document.getElementById('toggleChargeNO');

document.querySelector('.nokia .txt-battery').innerHTML = nokia.getBattery() + "%";
document.querySelector('.nokia .charging').style.display = 'none';
setBatterColor(nokia, ".nokia");

function switchChargeNO() {
	if (checkBatteryNO.checked) {
		turnChargeNO();
		document.querySelector('.nokia .charged').style.display = 'none';
		document.querySelector('.nokia .charging').style.display = 'block';
	}
	else {
		document.querySelector('.nokia .charged').style.display = 'block';
		document.querySelector('.nokia .charging').style.display = 'none';
		setBatterColor(nokia, ".nokia");
		clearInterval(onChargeNO);
	}
}
function lowerBattery() {
	let offChargeNO = setInterval(function () {
		let power = document.querySelector('#toggleChargelNO').checked;
		if (power) {
			turnLowerBattery();
		} 
		else {
			clearInterval(offChargeNO)
		
		}
	})
}

function turnChargeNO() {
	onChargeNO = setInterval(function () {
		nokia.setChargeBattery();
		let txtBattery = document.querySelector('.nokia .txt-battery');
		txtBattery.innerHTML = nokia.getBattery() + '%';
	}, 700);
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
//iphone
let chargeIphone = false;
let onChargeIP;
let checkBatteryIP = document.getElementById('toggleChargeIP');

document.querySelector('.Iphone .txt-ibattery').innerHTML = iphone.getBattery() + "%";
document.querySelector('.Iphone .charging').style.display = 'none';
setBatterColor(iphone, ".Iphone");

function switchChargeIP() {
	if (checkBatteryIP.checked) {
		turnChargeIP();
		document.querySelector('.Iphone .charged').style.display = 'none';
		document.querySelector('.Iphone .charging').style.display = 'block';
	}
	else {
		document.querySelector('.Iphone .charged').style.display = 'block';
		document.querySelector('.Iphone .charging').style.display = 'none';
		setBatterColor(iphone, ".Iphone");
		clearInterval(onChargeIP);
	}
}
function ilowerBattery() {
	let ipower = document.querySelector('#toggleChargelIP').checked;
	if (ipower) {
		turnLowerBatteryi();
	} else {
		clearInterval(onChargeIP)
	}
}
function turnChargeIP() {
	onChargeIP = setInterval(function () {
		iphone.setChargeBattery();
		let txtBattery = document.querySelector('.Iphone .txt-ibattery');
		txtBattery.innerHTML = iphone.getBattery() + '%';
	}, 700);
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