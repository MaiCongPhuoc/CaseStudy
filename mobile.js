class Message {
    constructor(id, content, sentTo, sentDay, inbox, inboxDay) {
        this.id = id;
        this.content = content;
        this.sentTo = sentTo;
        this.sentDay = sentDay;
        this.inbox = inbox;
        this.inboxDay = inboxDay;
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
let powerPhone = -1;
let poweriPhone = -1;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let arrMessage = [];
let arrImessage = [];
let showDate = new Date();

let idNokia = 'NOKIA';
let idIphone = 'Iphone';

// let mes = new Message(idIphone, 'đây là nội dung message NOKIA', 'Iphone');
// arrMessage.push(mes);

// let imes = new Message(idNokia, 'đây là nội dung message Iphone ', 'Iphone');
// arrImessage.push(imes);


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
    powerPhone *= p;
    if(powerPhone > 0) {
        document.querySelector('.home_phone>.power').classList.add('d_none');
    } else {
        document.querySelector('.home_phone>.power').classList.remove('d_none');
    }
    return powerPhone
}
function ipower(i) {
    poweriPhone *= i;
    if(poweriPhone > 0) {
        document.querySelector('.home_iphone>.power').classList.add('d_none');
    } else {
        document.querySelector('.home_iphone>.power').classList.remove('d_none');
    }
    return poweriPhone
}
function renderMessage1() {
    let ulMessage = document.querySelector('.div_message-content>ul');
    let render = arrMessage.map(function (arrMessa) {
        return `
            <li onclick="">
                <span>
                    <img src="./img/IP_receiver.png" alt="">
                </span>
                <div class="div_message-box">
                    <div>
                        <strong>${arrMessa.id}</strong>
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
    let render = arrImessage.map(function (arrMessa) {
        return `
            <li onclick="">
            <div class="div_iibox-box">
                <div>
                    <div>
                        <small>${arrMessa.getDay()}</small>
                    </div>
                    <div class="content_message">
                        ${arrMessa.content}
                    </div>
                </div>
                <strong>${arrMessa.id}</strong>
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
    if(!contentMess) {
        // document.querySelector('.warring').innerHTML = "you haven't entered the message!!";
        alert("you haven't entered the message!!");
        return
    }
    mes = new Message(idIphone, contentMess, 'Iphone');
    arrMessage.push(mes);
    arrImessage.push(mes);
    renderMessage1();
    renderMessage2()
    document.querySelector('#enterMes').value = '';
    document.querySelector('.div_inbox').classList.add('d_none');
}
function send2() {
    let contentMess = document.querySelector('#div_imessage').value;
    if(!contentMess) {
        // document.querySelector('.warring').innerHTML = "you haven't entered the message!!";
        alert("you haven't entered the message!!");
        return
    }
    imes = new Message(idNokia, contentMess, 'Iphone');
    arrMessage.push(imes);
    arrImessage.push(imes);
    renderMessage1();
    renderMessage2()
    document.querySelector('#div_imessage').value = '';
    document.querySelector('.div_imessage').classList.add('d_none');
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