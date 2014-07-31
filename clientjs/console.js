var Console = function()
{
    this.lines = [];
    document.getElementById("console").innerHTML = "<p>Are you ready 2 Rock;PAPER;SCISSORS!?<p>";
};
Console.prototype.appendText = function(msg)
{
    this.lines.push(msg);
    if(this.lines.length > 4)
        this.lines.shift();
    this.display();
};
Console.prototype.display = function()
{
    var text = "";
    for(var i=0; i<this.lines.length; i++)
        text += "<p>"+this.lines[i]+"</p>";
    document.getElementById("console").innerHTML =text;
};
