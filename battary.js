let batteryIndicator = 0;
let plus = 1;
let batery = -1;
function switchChargeNO(b) {
	batery *= b;
	if (batery > 0) {
		setTimeout(function () {
			let indicator = document.querySelector('.batery_percent>span');
			total = batteryIndicator += plus;
			if (total <= 50) {
				indicator.innerHTML = `${total}%`;
				switchChargeNO();
			}
			return total;
		}, 500)
	}else {
		return switchChargeNO();
	}
}