$(document).ready(function () {
    $('#amount').keyup(function () {
        var a = $(this).val();
        $('.amount-to-add').html(`&#x20B9; ${a}`);
    });

    setTimeout(function(){
        $('.bounded-popup').addClass('active');
    }, 1000);

    $('.close-btn').on('click', function(){
        $('.bounded-popup').removeClass('active');
    });
    
})