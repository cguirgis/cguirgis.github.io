$(document).ready(function () {
    $('#history').click(function () {
        $("#history_panel").toggleClass("visible");
         $("#history.accordion").toggleClass("active");
        $("#key.accordion").removeClass("active");
        
        $("#today.accordion").removeClass("active");
        
        $("#fun_facts.accordion").removeClass("active");
        $("#looking_for_more.accordion").removeClass("active");
        
        $("#key_panel").removeClass("visible");
        $("#today_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });});

    $('#key').click(function () {
        $("#key_panel").toggleClass("visible");
         $("#key.accordion").toggleClass("active");
        $("#history_panel").removeClass("visible");
        $("#history.accordion").removeClass("active");
        $("#today_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });

    $('#today').click(function () {
        $("#today_panel").toggleClass("visible");
        $("#history_panel").removeClass("visible");
        $("#history.accordion").removeClass("active");
       
        $("#key_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });

    
    $('#fun_facts').click(function () {
        $("#fun_facts_panel").toggleClass("visible");
        $("#history_panel").removeClass("visible");
         $("#history.accordion").removeClass("active");
        $("#key_panel").removeClass("visible");
        $("#today_panel").removeClass("visible");
        $("#looking_for_more_panel").removeClass("visible");
    });

    $('#looking_for_more').click(function () {
        $("#looking_for_more_panel").toggleClass("visible");
        $("#history_panel").removeClass("visible");
         $("#history.accordion").removeClass("active");
        $("#key_panel").removeClass("visible");
        $("#today_panel").removeClass("visible");
        $("#fun_facts_panel").removeClass("visible");
    });





