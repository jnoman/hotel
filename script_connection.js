var req = new XMLHttpRequest();
req.open('GET','user.json');
req.onload = function()
{
    var data = JSON.parse(req.responseText);
    var username= document.getElementById("username").text;
    var password= document.getElementById("password").text;
    var btn = document.getElementById("btn");
    btn.addEventListener('click',function()
    {
        for(var i=0;i<data.length;i++)
        {
            if(data[i]['email']==username && data[i]['password']==password)
            {
                window.location.href("reservation.html");
            }
        }
    })
};