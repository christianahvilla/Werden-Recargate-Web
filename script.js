function copyClipBoard() {

    /* Get the text field */
    var copyText = document.getElementById("myInput");

    var button = document.getElementById(copyText.textContent);

    button.className = 'copy-button-clicked';

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.textContent);
    /* Alert the copied text */
    alert("Numero " + copyText.textContent);
}