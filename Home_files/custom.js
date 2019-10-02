$(document).ready(function () {
    /*$("#wallet").click(function () {
        $(this).parent().toggleClass("show");
        return false;
    });*/

    let click = false;
    $("button.mobile-menu").click(function () {
        click = !click;
        $(".main_navbar").toggleClass("show");
        /*$("body").toggleClass("overflow-hidden");*/
        /*if (click){
            $("body").attr("style",'over')
        }*/
    });

    // let show = false;
    $(".menu-item a").click(function (e) {
        if ($(this).parent().find(".sub-menu") !== null) {
            // if (!show)
            $(this).parent().find(".sub-menu").show();
            // else
            //     $(this).parent().find(".sub-menu").hide();
            // show = !show;
            return false;
        }
    });

    var el = document.querySelector('.odometerx');

    od = new Odometer({
        el: el,
        value: 153048561,
        format: ',ddd',
        theme: 'slot-machine'
    });
    od.update(153048562)
});
