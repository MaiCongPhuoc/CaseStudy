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
$(function () {
    $(".div_message-content>ul>li").draggable({ axis: "x" });
    // $(".div_message-content>ul>li").draggable({ revert: true });
    $(".div_message-content>ul>li").draggable({
        stop: function (value) {
            var x = $(".div_message-content>ul>li").position();
            if (x.top >= 40) {
                // ireset();
                $.each(arrMessage, function (index, value) {
                    value = index + 1;
                    console.log(arrMessage.splice(value, 1));
                    renderMessage1()
                    renderMessage2()
                })
            }
        }
    })
});
$(function () {
    $(".div_iibox-content>ul>li").draggable({ axis: "y" });
    $(".div_iibox-content>ul>li").draggable({ revert: true });
    
});
