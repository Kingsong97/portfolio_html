document.addEventListener('DOMContentLoaded', function () {
    const rightButton = document.getElementById('right');
    rightButton.addEventListener('click', function () {
        const body = document.body;

        if (body.classList.contains('default-theme')) {
            body.classList.remove('default-theme');
            body.classList.add('alternate-theme');
        } else {
            body.classList.remove('alternate-theme');
            body.classList.add('default-theme');
        }
    });
});
