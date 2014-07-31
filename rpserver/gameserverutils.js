
function everyonePicked(users)
{
    notPicked = [];
    for(var key in users){
        if(users.hasOwnProperty(key)){
            if(!users[key].hasMoved()){
                notPicked.push(key);
            }
        }
    }
    for(var i=0; i<notPicked.length; i++)
    {
        console.log(notPicked[i] + " has yet to choose.");
    }
    return notPicked.length > 0 ? false : true;
}
function getResult(a, b)
{
    // 1 = a win, 0 = a loss, null = draw
    if(a === "s")
    {
        if(b === "p")
            return 1;
        else if(b === "r")
            return 0;
    }
    else if(a === "p")
    {
        if(b === "s")
            return 0;
        else if(b === "r")
            return 1;
    }
    else if(a === "r")
    {
        if(b === "s")
            return 1;
        else if(b === "p")
            return 0;
    }
    //if here it is draw
    return null;
}
exports.getResult = getResult;
exports.everyonePicked = everyonePicked;
