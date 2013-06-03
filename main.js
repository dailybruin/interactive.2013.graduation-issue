$(document).ready(function(){
    //hide the article list when the DOM is ready
    $('#article-list ul').hide();
    
    //roll up the article list when anywhere is clicked
    $('html').click(function(){
        $('#article-list ul').slideUp();
    });
    
    $('nav a').click(function(event) {
        event.stopPropagation(); //override the click anywhere roll up
        var id = $(this).attr('id');
        
        //roll up all uls
        $('#article-list ul').slideUp();
        if (!$('#article-list #'+id).is(':visible')) { //skip if the section clicked is already visible (prevents a "bounce")
            $('#article-list #'+id).slideToggle();
        }
        return false;
    });
})