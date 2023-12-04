// CT-2019-030 - JavaScripts


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


