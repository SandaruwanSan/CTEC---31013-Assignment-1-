// CT-2019-030 - JavaScripts


//Functions for Redo and Undo

function execUndo() {
    document.execCommand('undo', false, null);
}

function execRedo() {
    document.execCommand('redo', false, null);
}


//Function For Text Alignment

function setTextAlignment(align) {
    document.getElementById('editor').style.textAlign = align;
}


//Function for Color Picker

function colorchange(command, arg) {
    document.execCommand(command, false, arg);

}
//Function For Italic

function italic(command) {
    document.execCommand(command, false, null);
}


//Function For Underline

function underline(command) {
    document.execCommand(command, false, null);
}

//Function for Bold

function bold(command) {
    document.execCommand(command, false, null);
}



