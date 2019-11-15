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
    var j=-1;
    for(var i=0;i<data.length;i++)
    {
        if(usern==data[i].mail && pass==data[i].password)
        {
            j=i;
        }
    }
    if(j!=-1)
    {
        document.cookie = data[j].first_name;
        document.getElementById("f").submit();
    }
    else
    {
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        alert("wrong email or password");
    }
})