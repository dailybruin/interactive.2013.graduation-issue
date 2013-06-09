function generateTiles(MEDIA_ROOT, content) { //content format: h1, h2, image, hyperlink
    for(i = 0; i < content.length; i++) {
        document.write(
            '<a href="'+'content[i][3]'+'">'+
                    '<div class="tile largesquare"; style="background-image: url('+MEDIA_ROOT+content[i][2]+')">'+
                            '<div class="tile-decoration">'+
                                    '<div class="caption">'+
                                            '<h1>'+content[i][0]+'</h1>'+
                                            '<h2>'+content[i][1]+'</h2>'+
                                    '</div>'+
                            '</div>'+
                    '</div>'+
            '</a>'
        );
    }
}