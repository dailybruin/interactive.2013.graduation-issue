$(document).ready(function(){
    //hide the article list when the DOM is ready
    $('#article-list ul').hide();
    
    //roll up the article list when anywhere is clicked
    $('html').click(function(){
        $('#article-list ul').slideUp();
    })
    
    $('nav a').click(function(event) {
        event.stopPropagation(); //override the click anywhere roll up
        var id = $(this).attr('id');
        
        if (!$('#article-list #'+id).is(':visible')) { //skip if the section clicked is already visible
            $('#article-list ul').slideUp();
            console.log(id);
            $('#article-list #'+id).slideToggle();            
        }
        return false;
    });
})