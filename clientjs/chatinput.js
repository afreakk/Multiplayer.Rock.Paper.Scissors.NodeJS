var ChatInput = function()
{
    this.textInput = new HTMLElement("chat_input", true);
    this.chatWindow = new HTMLElement("chat_window", false);
};
ChatInput.prototype.show = function()
{
    this.chatWindow.show();
    inputMgr.receiveKeyUp("chat", this);
};
ChatInput.prototype.focus = function()
{
    this.textInput.focus();
};
ChatInput.prototype.keyUp = function(e)
{
    var textValue = this.textInput.getValue();
    if (e.keyCode == 13 && this.textInput.elem.value.length > 0) 
    {
        socket.sendChat(textValue);
        this.textInput.setValue("");
    }
};
//----
