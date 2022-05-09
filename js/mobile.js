class Mobile {
    constructor(name, battery) {
        this.name = name;
        this.battery = battery;
    }

    getBattery() {
        return this.battery;
    }

    setBattery(batt) {
        if (batt > 100)
            return 100;
        return batt;
    }

    setChargeBattery() {
        if (this.battery >= 100) {
            this.battery = 100;
        }
        else {
            this.battery += 1;
        }
    }
    setLowerBattery() {
        if (this.battery >= 0) {
            this.battery -= 1;
        }
    }
}

let nokia = new Mobile('NOKIA', 15);
let iphone = new Mobile('IPHONE', 35);

class Message {
    constructor(id, content, sentTo, sentDay, inbox, inboxDay, battery) {
        this.id = id;
        this.content = content;
        this.sentTo = sentTo;
        this.sentDay = sentDay;
        this.inbox = inbox;
        this.inboxDay = inboxDay;
        this.battery = battery;
    }
    getDay() {
        let currentdate = new Date();
        let datetime;
        return datetime = `${currentdate.getDate()}-${currentdate.getMonth() + 1}-${currentdate.getFullYear()}  ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
    }
    getHuors() {
        let showDate = new Date();
        let hours;
        return hours = `${showDate.getHours()}:${showDate.getMinutes()}:${showDate.getSeconds()}`
    }
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let arrMessage = [];
let showDate = new Date();
let powerMobile = document.querySelector('#toggleChargelNO');
let ipowerMobile = document.querySelector('#right #toggleChargelIP');

let id = 1;

let mes = new Message(id, 'đây là nội dung message', 'Iphone', 25);
arrMessage.push(mes);
id++;
mes = new Message(id, 'đây là nội dung message 2 ', 'Iphone');
id++;
arrMessage.push(mes);
/**
 * show hours
 */
function showHours() {
    let sHours = document.querySelector('.header_phone-left');
    sHours.innerHTML = `<span>${showDate.getHours()}:${showDate.getMinutes()}</span>`
    // sHours.innerHTML = show;
    let Time = document.querySelector('.date');
    Time.innerHTML = `${days[showDate.getDay()]}, ${months[showDate.getMonth()]} ${showDate.getDate()}, ${showDate.getFullYear()}`
    let TimeIphone = document.querySelector('.header_iphone-left');
    TimeIphone.innerHTML = `<span>${showDate.getHours()}:${showDate.getMinutes()}</span>`
    let timeMessage = document.querySelector('.div_message-content>div>span');
    timeMessage.innerHTML = `${days[showDate.getDay()]}, ${months[showDate.getMonth()]} ${showDate.getDate()}, ${showDate.getFullYear()}`
    let timeiMessage = document.querySelector('.div_imessage-head>div>span');
    timeiMessage.innerHTML = `${days[showDate.getDay()]}, ${months[showDate.getMonth()]} ${showDate.getDate()}, ${showDate.getFullYear()}`
}
function power(p) {
    if (powerMobile.checked) {
        turnLowerBattery()
        document.querySelector('.home_phone .power').classList.add('d_none');
    } else {
        document.getElementById('power').style.zIndex = 2;
        clearInterval(onChargeNO)
        document.querySelector('.home_phone .power').classList.remove('d_none');
    }
}
function turnLowerBattery() {
    onChargeNO = setInterval(function () {
        if (nokia.getBattery() == 0) {
            document.getElementById('power').style.zIndex = 2;
            document.querySelector('.home_phone .power').classList.remove('d_none');
            return nokia.getBattery() == 0;
        } else {
            nokia.setLowerBattery();
            let txtBattery = document.querySelector('.nokia .txt-battery');
            txtBattery.innerHTML = nokia.getBattery() + '%';
        }
    }, 1300);
}

function ipower(p) {
    if (ipowerMobile.checked) {
        turnLowerBatteryi();
        document.querySelector('.home_iphone .power').classList.add('d_none');
    } else {
        document.getElementById('ipower').style.zIndex = 2;
        clearInterval(onChargeIP);
        document.querySelector('.home_iphone .power').classList.remove('d_none');
    }
}
function turnLowerBatteryi() {
    onChargeIP = setInterval(function () {
        if (iphone.getBattery() == 0) {
            document.getElementById('power').style.zIndex = 2;
            document.querySelector('.home_iphone .power').classList.remove('d_none')
            return iphone.getBattery() == 0;
        } else {
            iphone.setLowerBattery();
            let txtBattery = document.querySelector('.Iphone .txt-ibattery');
            txtBattery.innerHTML = iphone.getBattery() + '%';
        }
    }, 1500);
}
function renderMessage1() {
    let ulMessage = document.querySelector('.div_message-content>ul');
    let render = arrMessage.map(function (arrMessa) {
        return `
            <li onclick="" id="${arrMessa.id}">
                <span>
                    <img src="./img/IP_receiver.png" alt="">
                </span>
                <div class="div_message-box">
                    <div>
                        <strong>${arrMessa.sentTo}</strong>
                        <small>${arrMessa.getDay()}</small>
                    </div>
                    <div class="content_message">
                        ${arrMessa.content}
                    </div>
                </div>
            </li>
            `
    })
    ulMessage.innerHTML = render.join('');
}
function renderMessage2() {
    let ulMessage = document.querySelector('.div_iibox-content>ul');
    let render = arrMessage.map(function (arrMessa) {
        return `
            <li onclick="" class="dragY" id="${arrMessa.id}">
            <div class="div_iibox-box">
                <div>
                    <div>
                        <small>${arrMessa.getDay()}</small>
                    </div>
                    <div class="content_message">
                        ${arrMessa.content}
                    </div>
                </div>
                <strong>NOKIA</strong>
                <span>
                    <img src="./img/NO_sender.png" alt="">
                </span>
            </div>
            </li>
            `
    })
    ulMessage.innerHTML = render.join('');
}

function send() {
    let contentMess = document.querySelector('#enterMes').value;
    if (!contentMess) {
        // document.querySelector('.warring').innerHTML = "you haven't entered the message!!";
        alert("you haven't entered the message!!");
        return
    }
    mes = new Message(id, contentMess, 'Iphone');
    id++;
    arrMessage.push(mes);
    renderMessage1();
    renderMessage2()
    document.querySelector('#enterMes').value = '';
    document.querySelector('.div_inbox').classList.add('d_none');
    $(".div_message-content>ul>li").draggable({ axis: "x" });
    $(".div_message-content>ul>li").draggable({ revert: true });
    $.mydele();
    $.imydele();
}
function send2() {
    let contentMess = document.querySelector('#div_imessage').value;
    if (!contentMess) {
        // document.querySelector('.warring').innerHTML = "you haven't entered the message!!";
        alert("you haven't entered the message!!");
        return
    }
    mes = new Message(id, contentMess, 'Iphone');
    id++;
    arrMessage.push(mes);
    renderMessage1();
    renderMessage2()
    document.querySelector('.div_imessage').value = '';
    document.querySelector('.div_imessage').classList.add('d_none');
    $(".div_iibox-content>ul>li").draggable({ axis: "x" });
    $(".div_iibox-content>ul>li").draggable({ revert: true });
    $.imydele();
    $.mydele();
}

function message() {
    document.querySelector('.div_message').classList.remove('d_none');
    document.querySelector('.div_inbox').classList.add('d_none');
}
function inbox() {
    document.querySelector('.div_inbox').classList.remove('d_none');
    document.querySelector('.div_message').classList.add('d_none');
}
function reset() {
    document.querySelector('.div_message').classList.add('d_none');
    document.querySelector('.div_inbox').classList.add('d_none');
}
function iibox() {
    document.querySelector('.div_iibox').classList.remove('d_none');
    document.querySelector('.div_inbox').classList.add('d_none');
}
function ireset() {
    document.querySelector('.div_iibox').classList.add('d_none');
    document.querySelector('.div_imessage').classList.add('d_none');
}
function imessage() {
    document.querySelector('.div_imessage').classList.remove('d_none');
    document.querySelector('.div_iibox').classList.add('d_none');
}
function init() {
    showHours();
    renderMessage1();
    renderMessage2()
}
init();
