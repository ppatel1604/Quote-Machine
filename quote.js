$(document).ready(function(){
    $("#getQuote").on("click", function(){
        $.getJSON({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data){
                console.log(JSON.stringify(data));
                $(".card-title").html(data.quote);
                $(".card-text").html(data.author);
                $("#tweetOut").on("click",function(){
                    $(this).attr("href",'https://twitter.com/intent/tweet?text='+data.quote);
                });
            },
            error: function(err) {alert(err); },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "9zxx1v6BZomsh7nAS89EEKBx16fmp1KUSdyjsnbXf7iUqDMAJn");
            }
        });
    });
});
