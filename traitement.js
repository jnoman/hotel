var btn=document.getElementById("btn1");
btn.addEventListener("click",function()
{
    var data = [
    {
        first_name:"jamal eddine",
        last_name:"noman",
        mail:"jamal@gmail.com",
        cin:"hh1111",
        date_naissons:"01/09/1997",
        genre:"homme",
        password:"1111"
    },
    {
        first_name:"ayoub",
        last_name:"el bouinany",
        mail:"ayoub@gmail.com",
        cin:"hh1111",
        date_naissons:"01/09/1997",
        genre:"homme",
        password:"1111"
    }
    ];
    var usern= document.getElementById("username").value;
    var pass= document.getElementById("password").value;
    for(var i=0;i<data.length;i++)
    {
        if(usern==data[i].mail && pass==data[i].password)
        {
            document.cookie = data[i].first_name;
            document.getElementById("f").submit();
        }
    }
})