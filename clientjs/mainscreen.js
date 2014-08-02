
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
