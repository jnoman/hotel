var xhr = new XMLHttpRequest(),
    jsonArr,
    method = "GET",
    jsonRequestURL = "user.json";

xhr.open(method, jsonRequestURL, true);
xhr.onreadystatechange = function()
{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        jsonArr = JSON.parse(xhr.responseText);
        jsonArr.push({"nissan": "sentra", "color": "green"});
        xhr.open("POST", jsonRequestURL, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("jsonTxt="+JSON.stringify(jsonArr));
    }
};
xhr.send(null);