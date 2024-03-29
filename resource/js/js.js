
var email,
    email2,
    password,
    password2,

    emailStat,
    email2Stat,
    passwordStat,
    password2Stat;


$(function() {


    // Email
    $("#email").change(function(){
        email = $("#email").val();
        var expEmail = /[-0-9a-z_]+@[-0-9a-z_]+\.[a-z]{2,6}/i;
        var resEmail = email.search(expEmail);
        if(resEmail == -1){
            $("#email").next().hide().text("Неверный формат Email").css("color","red").fadeIn(400);
            $("#email").removeClass().addClass("inputRed");
            emailStat = 0;
            buttonOnAndOff();
        }else{

            $.ajax({
                url: "testingLoginEmail.php",
                type: "GET",
                data: "email=" + email,
                cache: false,
                success: function(response){
                    if(response == "no"){
                        $("#email").next().hide().text("Email Занят").css("color","red").fadeIn(400);
                        $("#email").removeClass().addClass("inputRed");
                    }else{
                        $("#email").removeClass().addClass("inputGreen");
                        $("#email").next().text("");
                    }
                }
            });
            emailStat = 1;
            buttonOnAndOff();
        }

    });
    $("#email").keyup(function(){
        $("#email").removeClass();
        $("#email").next().text("");
    });

    // EmailAgain
    $("#email2").change(function(){
        if(email2 != email){
            $("#email2").next().hide().text("Почты не совпадают").css("color","red").fadeIn(400);
            $("#email2").removeClass().addClass("inputRed");
            email2Stat = 0;
            buttonOnAndOff();
        }else{
            $("#email2").removeClass().addClass("inputGreen");
            $("#email2").next().text("");
        }
    });
    $("#email2").keyup(function(){
        email2 = $("#email2").val();
        if(email2 == email){
            email2Stat = 1;
            buttonOnAndOff();
        }else{
            email2Stat = 0;
            buttonOnAndOff();
        }
    });



    //Пароль
    $("#password").change(function(){
        password = $("#password").val();
        if(password.length < 6){
            $("#password").next().hide().text("Слишком короткий пароль").css("color","red").fadeIn(400);
            $("#password").removeClass().addClass("inputRed");
            passwordStat = 0;
            buttonOnAndOff();
        }else{
            $("#password").removeClass().addClass("inputGreen");
            $("#password").next().text("");
            passwordStat = 1;
            buttonOnAndOff();
        }
    });
    $("#password").keyup(function(){
        $("#password").removeClass();
        $("#password").next().text("");
    });

    //Проверка пароля
    $("#password2").change(function(){
        if(password2 != password){
            $("#password2").next().hide().text("Пароли не совпадают").css("color","red").fadeIn(400);
            $("#password2").removeClass().addClass("inputRed");
            password2Stat = 0;
            buttonOnAndOff();
        }else{
            $("#password2").removeClass().addClass("inputGreen");
            $("#password2").next().text("");
        }
    });
    $("#password2").keyup(function(){
        password2 = $("#password2").val();
        if(password2 == password){
            password2Stat = 1;
            buttonOnAndOff();
        }else{
            password2Stat = 0;
            buttonOnAndOff();
        }
    });

    function buttonOnAndOff(){
        if(emailStat == 1 && passwordStat == 1 && password2Stat == 1){
            $("#submit").removeAttr("disabled");
        }else{
            $("#submit").attr("disabled","disabled");
        }

    }

});