const qwe = document.querySelector('#qwe');
const testTextFieldOne = document.querySelector('#testTextFieldOne');
const testTextFieldTwo = document.querySelector('#testTextFieldTwo');
const testTextFieldThree = document.querySelector('#testTextFieldThree');

qwe.addEventListener('mousedown', (event) => {
        if (event.detail === 1){
            testTextFieldOne.style.background = 'lime';
            testTextFieldTwo.style.background = 'black';
            testTextFieldThree.style.background = 'black';
        }
        if (event.detail === 2){
            testTextFieldOne.style.background = 'black';
            testTextFieldTwo.style.background = 'yellow';
            testTextFieldThree.style.background = 'black';
        }
        if (event.detail === 3){
            testTextFieldOne.style.background = 'black';
            testTextFieldTwo.style.background = 'black';
            testTextFieldThree.style.background = 'red';
        }
});