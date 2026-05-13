const result = document.querySelector("#result");
const button = document.querySelectorAll("button");

for(let i=0 ; i <button.length ; i++){

    button[i].addEventListener("click",()=>{
        let buttonVal = button[i].textContent;
        if(buttonVal === "C"){
            clearResult();
        }else if(buttonVal === "="){
            calculateResult();
        }else if(buttonVal === "x"){
            deleteLast();
        }
        else{
            appendValue(buttonVal);
        }
    })
}

function clearResult(){
    result.value = '';
};

function calculateResult(){
    result.value = eval(result.value);
};
function appendValue(buttonVal){
    result.value += buttonVal;
}
function deleteLast() {
    let current = result.value;
    result.value = current.slice(0, -1);
}