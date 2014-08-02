var inputMgr_ = null;
function getInputMgr()
{
    return inputMgr_;
}
function initInputMgr()
{
    inputMgr_ = new InputMgr();
}
//-----
var InputMgr = function()
{
    this.key = {};
    this.key.up = {};
    window.onkeyup = this.keyUp;
};
InputMgr.prototype.keyUp = function(e)
{
    for(var key in getInputMgr().key.up)
    {
        getInputMgr().key.up[key].keyUp(e);
    }
};
InputMgr.prototype.receiveKeyUp = function(id, receiver)
{
    this.key.up[id] = receiver;
};
InputMgr.prototype.stopKeyUp = function(id)
{
    delete this.key.up[id];
};
