const laoderContainer = document.querySelector('.loaderContainer');
window.addEventListener('load', () => {
    laoderContainer.classList.add('fonduOut');
    setTimeout(() => {
        laoderContainer.classList.add('hidden');
    }, 400);
});