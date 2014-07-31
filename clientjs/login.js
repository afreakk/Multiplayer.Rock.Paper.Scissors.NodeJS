function loginInit(login)
{
    window.onkeyup = function(e)
    {
        login.keyCheck(e);
    };
}
//----
var LoginScreen = function(callback)
{
    this.callback = callback;
    this.elem = new HTMLElement("login", true);
    loginInit(this);
};
LoginScreen.prototype.keyCheck = function(e)
{
    var elm = document.getElementById("nick_input");
    if (e.keyCode == 13 && elm.value.length > 0) 
    {
        this.elem.hide();
        this.callback(elm.value);
    }
};
