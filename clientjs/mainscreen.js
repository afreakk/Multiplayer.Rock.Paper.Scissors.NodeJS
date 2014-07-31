
var HTMLElement = function(id, visible)
{
    this.elem = document.getElementById(id);
    this.id = id;
    this.visible = visible;
    if(this.visible)
        this.show();
    else
        this.hide();
};
HTMLElement.prototype.show=function()
{
    this.elem.style.display = "block";
};
HTMLElement.prototype.hide=function()
{
    this.elem.style.display = "none";
};
var MainScreen = function()
{
    this.main = new HTMLElement("main_screen", false);
    this.screens = {};
    elements = ["choose_screen", "selected_screen", "result_screen"];
    for(var i=0; i<elements.length; i++)
    {
        var elm = elements[i];
        this.screens[elm] = new HTMLElement(elm, false);
    }
};
MainScreen.prototype.init=function()
{
    this.main.show();
    this.screens.choose_screen.show();
};
MainScreen.prototype.show=function(elm)
{
    for(var key in this.screens)
    {
        if(key !== elm)
            this.screens[key].hide();
        else
            this.screens[key].show();
    }
};
