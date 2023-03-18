const consoleLog = document.querySelector('#consoleLog');
const alerts = document.querySelector('#alerts');
const prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', (event) => {
    alert('Служит для вывода информации в консоль');
});

alerts.addEventListener('click', (event) => {
    alert('Служит как оповищение перед входом на сайт')
});

prompt.addEventListener('click', (event) => {
    alert('Служит как оповищение перед входом на сайт с вапросом к вам');
})