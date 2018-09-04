
$(function(){
    var url = './views/main.html';
    $('body').fadeOut(0).fadeIn(650);

    setTimeout(function(){
        $('body').fadeOut(650, function(){
            window.location = url;
        });
    }, 3000)
});
