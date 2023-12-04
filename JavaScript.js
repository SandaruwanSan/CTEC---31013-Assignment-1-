// CT-2019-030 - JavaScripts

//Functions for Redo and Undo

function execUndo() {
    document.execCommand('undo', false, null);
}

function execRedo() {
    document.execCommand('redo', false, null);
}
