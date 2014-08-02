var LoginScreen = function(callback)
{
    this.callback = callback;
    this.loginScreen = new HTMLElement("login", true);
    this.loginTextInput = new HTMLElement("nick_input", true);
    inputMgr.receiveKeyUp("login", this);
};
LoginScreen.prototype.keyUp = function(e)
{
    if (e.keyCode == 13 && this.loginTextInput.elem.value.length > 0) 
    {
        this.loginScreen.hide();
        this.callback(this.loginTextInput.getValue());
        inputMgr.stopKeyUp("login");
    }
};
