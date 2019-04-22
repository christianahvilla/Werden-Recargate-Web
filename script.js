function copyClipBoard() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.textContent);
    /* Alert the copied text */
    alert("Numero " + copyText.textContent);
}