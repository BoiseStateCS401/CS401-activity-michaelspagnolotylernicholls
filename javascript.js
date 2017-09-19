
window.onload = function () {

    var element = document.getElementById('toggleThing');
    var toggleElement = document.getElementById('toggler');

    toggleElement.addEventListener("click", function () {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
    );



}