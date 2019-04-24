

function copyClipBoard(id) {

    /* Get the text field */

    var button = document.getElementById(id);

    button.className = 'copy-button-clicked';

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(button.value);
}
