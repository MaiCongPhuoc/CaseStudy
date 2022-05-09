$(function () {
    $(".home").draggable({ axis: "y" });
    $(".home").draggable({ revert: true });
    $(".home").draggable({
        stop: function () {
            var x = $(".home").position();
            if (x.top >= 10) {
                ireset();
            }
        }
    })
});
$(function () {
    $(".home1").draggable({ axis: "y" });
    $(".home1").draggable({ revert: true });
    $(".home1").draggable({
        stop: function () {
            var x = $(".home1").position();
            if (x.top >= 10) {
                ireset();
            }
        }
    })
});
$.mydele = (function () {
    $(".div_message-content>ul>li").draggable({ axis: "x" });
    $(".div_message-content>ul>li").draggable({
        stop: function (event) {
            let mes = arrMessage.findIndex(function (currenValue) {
                if (event.target.id == currenValue.id) {
                    return currenValue
                }
            });
            console.log(mes)
            arrMessage.splice(mes, 1)
            console.log(arrMessage)
            renderMessage1();
            renderMessage2();
            $.mydele();
            $.imydele();
        }
    })
});
$.imydele = (function () {
    $(".div_iibox-content>ul>li").draggable({ axis: "x" });
    $(".div_iibox-content>ul>li").draggable({
        stop: function (event) {
            let mes = arrMessage.findIndex(function (currenValue) {
                console.log(event.target.id)
                if (event.target.id == currenValue.id) {
                    return currenValue
                }
            });
            console.log(mes)
            arrMessage.splice(mes, 1)
            renderMessage1();
            renderMessage2();
            $.imydele();
            $.mydele();
        }
    })
});
$(".grid").sortable({
    appendTo: document.body
});
$(document).ready(function () {
    $('#fade').fadeIn(3000)
});
// $(document).ready(function () {
//     $('#fade1').fadeIn(2000)
// });
// deleteLi();
$.mydele();
$.imydele();