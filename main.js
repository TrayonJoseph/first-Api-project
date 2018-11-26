$(document ).ready(function(){
    $("#jedi").on("click",function(){

    

    $.ajax({
        url:"https://icanhazdadjoke.com/",
        headers: {
            "Accept":"application/json"
        },

        success: function(data){
            console.log(data)
            const joke1= data.joke
            $("#name").html(joke1)
        }

    })  

    })
















})