function Validate(obj) {
    var pass=obj.pass.value;
    var passagain=obj.passagain.value;
    var mail=obj.mail.value;
    var mailagain=obj.mailagain.value;
    var date=obj.date.value.split('-');
    var errors="";
    if (mailagain=="" || pass=="" || passagain=="" || mail=="")
    {
        alert("Алл Форм Маст би комплетед!!");
        return false;
    }
    if (pass!=passagain)
    {
        errors+="Passwords are not similar!!\n";
    }
    if (mail!=mailagain)
    {
        errors+="E-mails are not similar!!\n"
    }
    if (pass.length<6)
    {
        errors+="Password is too short!!\n";
    }
    var reg = /^\w+@\w+\.\w{2,4}$/i;
    if (!reg.test(mail))
    {
        errors+="E-mail is not correct!!\n";
    }
    if (date[0]<1930)
    {
        errors+="Date is not correct!!\n";
    }

    if(errors=="")
        return true;
    else
    {
        alert(errors);
        return false;
    }
}