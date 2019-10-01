$(document).ready(function () {
    $("#wallet").click(function () {
        $(this).parent().toggleClass("show");
        return false;
    });

    let click = false;
    $("button.mobile-menu").click(function () {
        click = !click;
        $(".main_navbar").toggleClass("show");
        $("body").toggleClass("overflow-hidden");
        /*if (click){
            $("body").attr("style",'over')
        }*/
    });
});
