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

    let show = false;
    let prev = null;
    $(".menu-item a").click(function (e) {
        if ($(this).parent().find(".sub-menu") !== null) {
            $(this).parent().find(".sub-menu").toggleClass("show");
            /*if (prev !== null && prev !== e.target)
                show = false;

            if (!show)
                $(this).parent().find(".sub-menu").show();
            else
                $(this).parent().find(".sub-menu").hide();
            show = !show;
            prev = e.target;*/
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
