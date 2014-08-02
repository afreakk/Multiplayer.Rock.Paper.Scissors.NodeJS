//--------- manipulates html elements
var HTMLElement = function(id, visible, display_style)
{
    this.elem = document.getElementById(id);
    this.id = id;
    this.visible = visible;
    this.display_style = display_style ? display_style : "block"; 
    if(this.visible)
        this.show();
    else
        this.hide();
};
HTMLElement.prototype.focus=function()
{
    this.elem.focus();
};
HTMLElement.prototype.show=function()
{
    this.elem.style.display = this.display_style;
};
HTMLElement.prototype.hide=function()
{
    this.elem.style.display = "none";
};
HTMLElement.prototype.setText = function(text)
{
    this.elem.innerHTML = text;
};
HTMLElement.prototype.setValue = function(value)
{
    this.elem.value = value;
};
HTMLElement.prototype.getValue = function()
{
    return this.elem.value;
};
//--------- 
String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
};
function setElementText(id, text)
{
    document.getElementById(id).innerHTML = text;
}
function space(count)
{
    return "&nbsp ".repeat(count);
}
function pFy(text)
{
    return "<p>"+text+"</p>";
}
