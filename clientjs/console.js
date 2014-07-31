var Console = function()
{
    this.lines = [];
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
