$(document).ready(function () {
    $('#history').click(function () {
        $("#history_panel").toggleClass("visible");
        $("#key_panel").removeClass("visible");
        $("#today_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });});

    $('#key').click(function () {
        $("#key_panel").toggleClass("visible");
        $("#history_panel").removeClass("visible");
        $("#today_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });

    $('#today').click(function () {
        $("#today_panel").toggleClass("visible");
        $("#history_panel").removeClass("visible");
        $("#key_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });

    
    $('#fun_facts').click(function () {
        $("#fun_facts_panel").toggleClass("visible");
        $("#history_panel").removeClass("visible");
        $("#key_panel").removeClass("visible");
        $("#today_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });

    $('#looking_for_more').click(function () {
        $("#looking_for_more_panel").toggleClass("visible");
        $("#history_panel").removeClass("visible");
        $("#key_panel").removeClass("visible");
        $("#today_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
    });





