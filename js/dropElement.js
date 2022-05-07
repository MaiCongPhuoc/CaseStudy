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
function dragDrop() {
    $(function () {
        $(".div_message-content>ul>li").draggable({ axis: "x" });
        $(".div_message-content>ul>li").draggable({ revert: true });
        $(".div_message-content>ul>li").draggable({
            stop: function () {
                var x = $(".div_message-content>ul>li").position();
                if (x.top >= 40) {
                    console.log(arrMessage)
                    // ireset();
                    $.each(arrMessage, function (index, value) {
                        arrMessage.splice(index, 1);
                        renderMessage1()
                        renderMessage2()
                        $(".div_message-content>ul>li").draggable({ axis: "x" });
                        $(".div_message-content>ul>li").draggable({ revert: true });

                    })
                }
            }
        })
    });
}
$(function () {
    $(".div_message-content>ul>li").draggable({ axis: "x" });
})
$(function () {
    $(".div_iibox-content>ul>li").draggable({ axis: "y" });
    $(".div_iibox-content>ul>li").draggable({ revert: true });

});
dragDrop();