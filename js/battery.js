let chargeNokia = false;
let onChargeNO; 

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
function lowerBattery() {
	let offChargeNO = setInterval(function() {
		let power = document.querySelector('#toggleChargelNO').checked;
		if(power){
			turnLowerBattery ();
		}else {
			console.log('b');
		}
	}, 1000)
}

function turnChargeNO(){
	onChargeNO = setInterval(function(){
		nokia.setChargeBattery();
		let txtBattery = document.querySelector('.nokia .txt-battery');
		txtBattery.innerHTML = nokia.getBattery() + '%';
	}, 900);
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

document.querySelector('.Iphone .txt-ibattery').innerHTML = iphone.getBattery() + "%";
document.querySelector('.Iphone .charging').style.display = 'none';
setBatterColor(iphone, ".Iphone");

function switchChargeIP() {
	if(chargeIphone == false) {
		document.getElementById('toggleChargeNO').checked;
		chargeIphone = true;
		turnChargeIP();
		document.querySelector('.Iphone .charged').style.display = 'none';
		document.querySelector('.Iphone .charging').style.display = 'block';
	}
	else {
		chargeIphone = false;
		clearInterval(onChargeIP);
		document.querySelector('.Iphone .charged').style.display = 'block';
		document.querySelector('.Iphone .charging').style.display = 'none';
		setBatterColor(iphone, ".Iphone");
	}
}

function turnChargeIP(){
	onChargeIP = setInterval(function(){
		iphone.setChargeBattery();
		let txtBattery = document.querySelector('.Iphone .txt-ibattery');
		txtBattery.innerHTML = iphone.getBattery() + '%';
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