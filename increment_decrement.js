let num1 = 0;
document.getElementById('num').innerText = num1;

const increment = () => {
    num1 += 1;
    document.getElementById('num').innerText = num1;
    document.getElementsByClassName('num')[0].style.color = 'green';
}
const reset = () => {
    num1 = 0 ;
    document.getElementById('num').innerText = num1;
    document.getElementsByClassName('num')[0].style.color = 'black';

}
const decrement = () => {
    num1 -= 1;
    document.getElementById('num').innerText = num1;
    document.getElementsByClassName('num')[0].style.color = 'red';

}


// let num1 = 0;
// document.getElementById('num').innerText = num1;
// function incement(){
//      num1= num1 + 1;
//      document.getElementById('num').innerText = num1;
// } 