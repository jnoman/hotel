    var btn = document.getElementById("btn1");
    btn.addEventListener('click',function()
    {
        /*var req = new XMLHttpRequest();
        req.open('get','user.json',true);
        req.onload = function()
        {
            var data = JSON.parse(req.responseText);
            var usern= document.getElementById("username").text;
            var pass= document.getElementById("password").text;
                for(var i=0;i<data.length;i++)
                {
                    if(data[i]['email']==usern && data[i]['password']==pass)
                    {
                        document.location.href="reservation.html";
                    }
                }
            document.write(data[0].first_name);
        };
        req.send(null);*/
        document.location.href="reservation.html";
    });
    


 
        
        
    
