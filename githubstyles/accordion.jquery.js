$(document).ready(function () {
    $('#exercises').click(function () {
        
        $("#exercises_panel").toggleClass("visible");
        
        $("#exercises.accordion").toggleClass("active");
        
        $("#project_one.accordion").removeClass("active");
        $("#project_two.accordion").removeClass("active");
        
        $("#project_one_panel").removeClass("visible");
        $("#project_two_panel").removeClass("visible");
        
    });});

    $('#project_one').click(function () {
        $("#project_one_panel").toggleClass("visible");
        
         $("#project_one.accordion").toggleClass("active");
        
        $("#project_two.accordion").removeClass("active");
        $("#exercises.accordion").removeClass("active");
        
        $("#project_two_panel").removeClass("visible");
        $("#exercises_panel").removeClass("visible");
    });

    $('#project_two').click(function () {
        $("#project_two_panel").toggleClass("visible");
        
        $("#project_two.accordion").toggleClass("active");
        
        $("#project_one.accordion").removeClass("active");
        $("#exercises.accordion").removeClass("active");
       
        $("#project_one_panel").removeClass("visible");
        $("#exercises_panel").removeClass("visible");
    });
