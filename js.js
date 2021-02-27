const divider = document.querySelector('#divider');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const calckBtn = document.querySelector('.calck');
const resetBtn = document.querySelector('.reset');
const infoP = document.querySelector('.info');
let bigger;
let smaller;
const divideCalck =()=>{

bigger = divider.value / 1.618033989;
smaller = divider.value - bigger;
};

const calculation = () =>{
    if (divider.value !==''){
        divideCalck();
result1.innerText = `${smaller.toFixed(3)}`;
result2.innerText = `${bigger.toFixed(3)}`;
    }
    else{
        infoP.innerText = 'Wpisz liczbę do podziału.'
    };
};
const reset = () =>{
    result1.innerText = 'Pierwszy wynik';
    result2.innerText = 'Drugi wynik';
    infoP.innerText = ''
 divider.value = '';
}
calckBtn.addEventListener('click', calculation);
resetBtn.addEventListener('click', reset);




















