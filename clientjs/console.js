function consoleFormat(text, count)
{
    return pFy(space(1)+text);
}

var Console = function(lineCount)
{ 
    this.lines = [];
    this.id = "console";
    this.lineCount = lineCount;
    this.appendText("Are you ready 2 Rock;PAPER;SCISSOR!?");
};
Console.prototype.appendText = function(msg)
{
    msg = "["+getStringTime()+"] "+msg;
    this.lines.push(msg);
    if(this.lines.length > this.lineCount)
        this.lines.shift();
    this.display();
};
Console.prototype.display = function()
{
    var text = "";
    for(var i=this.lines.length-1; i >= 0; i--)
        text += this.formatLine(i);
    setElementText(this.id, text);
};
Console.prototype.formatLine= function(idx)
{
    return consoleFormat(this.lines[idx], idx);
};
