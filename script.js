function copyClipBoard() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the text: " + copyText.textContent);
}