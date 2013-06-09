$(document).ready(function(){
    $(function(){

        // Bind the event.
        $(window).hashchange( function(){
            // Alerts every time the hash changes!
            console.log( location.hash );
            switch (location.hash) {
                case "#p01":
                    $('#a01').show();
                    break;
                default:
                    break;                
            }
        });

        // Trigger the event (useful on page load).
        $(window).hashchange();

    });;
})