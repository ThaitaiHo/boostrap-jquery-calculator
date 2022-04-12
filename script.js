$('document').ready(function(){
    var resuilt = false;
    // console.log("akaa" + $('button.button').text());
    
    $(".button, .button-op").click(function(){
        var value = $(this).val();
        
        if($(this).attr('class') == "button"){
            $('.button-op').prop('disabled', false)
        }
        
        if(resuilt && $(this).attr('class') == "button"){
            $('#display').val('');
            resuilt = false;
        }

        if ($(this).attr('class') == "button-op"){
            $(this).prop('disabled', true)
            var newval = " " + value +  " ";
            value =  newval;
            resuilt = false;
        }

        $('#display').val(function(index, cvalue){
            return cvalue + value;
        })
    })

    $("button[class*='equal']").click(function(){
        var total = eval($('#display').val());
        $('#display').val(total);
        resuilt = true;
        console.log(resuilt);
    })

    $('#clear-btn').click(function(){
        $('#display').val('');
    })

    // $('.thai').append("<div class = 'helo'>Hello</div>");
    
    // $('body').on('click', 'div.helo',function(){
    //     console.log($(this).text)
    // })

    // $('.thai').append("<div class = 'helo'>Helloii</div>");
});
