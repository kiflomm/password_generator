let display = document.getElementById('display');
let copy = document.getElementById('copy');
let lengthChoose = document.getElementsByName('length')[0];
let uppercaseCheck = document.getElementsByName('uppercase')[0];
let lowercaseCheck = document.getElementsByName('lowercase')[0];
let numbersCheck = document.getElementsByName('numbers')[0];
let symbolsCheck = document.getElementsByName('symbols')[0];
let generate = document.getElementById("generate");

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let symbols = "!@#$%^&*()_+=";

let password ='';
function generater(){
    if(!uppercaseCheck.checked&&
        !lowercaseCheck.checked&&
        !numbersCheck.checked&&
        !symbolsCheck.checked
        ){
            alert("Please check at least one check box");
            retun;
        }

    password =''; 
    for(;password.length<lengthChoose.value;){
        if(uppercaseCheck.checked){
            let index = Math.floor((Math.random())*26);
            let divisible = Math.floor((Math.random()*100))%2;
            password = password.concat((divisible?uppercase[index]:''));
            if(password.length == lengthChoose.value) break;
        }
        if(lowercaseCheck.checked){
            let index = Math.floor((Math.random())*26);
            let divisible = Math.floor((Math.random()*100))%2;
            password = password.concat((divisible?lowercase[index]:''));
            if(password.length == lengthChoose.value) break;
        }
        if(numbersCheck.checked){
            let index = Math.floor((Math.random())*10);
            let divisible = Math.floor((Math.random()*100))%2;
            password = password.concat((divisible?numbers[index]:''));
            if(password.length == lengthChoose.value) break;
        }
        if(symbolsCheck.checked){
            let index = Math.floor((Math.random())*13);
            let divisible = Math.floor((Math.random()*100))%2;
            password = password.concat((divisible?symbols[index]:''));
            if(password.length == lengthChoose.value) break;
        }
    }
    display.innerHTML = password;
}
function copyThis(){
    let inputType = document.createElement("input");
    inputType.value = display.innerText;
    document.body.appendChild(inputType);
    inputType.select();
    document.execCommand("copy");
    document.body.removeChild(inputType);
    alert("mission comleted!");
}
