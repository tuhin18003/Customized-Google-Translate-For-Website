$(window).on('load', function () {
    var lang = $.cookie("lang");
    if (lang) {
        $.cookie("googtrans", "/en/" + lang, { path : "/", domain : "127.0.0.1" });
    } else {
        $.cookie("googtrans", "/en/", { path : "/", domain : "127.0.0.1" });
    }
    var curLang = $.cookie("lang");
    if( curLang ){
        $(".langs").val( curLang );
    }

    setTimeout(function() {
        $("body").removeAttr("style");
    }, 300);
    
});

$(document).ready(function() {
    $(".langs tr td").on("click", function() {
        $.cookie("lang", $(this).data("lang") );
        window.location.href = location.href;
    });
});