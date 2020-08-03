function inputDigit(num){
    form.display.value =  form.display.value + num;
    }

// CE backspace button 

document.getElementById("remove").addEventListener('click', function(){

    var backspace = document.getElementById("input-area")
    backspace.value =backspace.value.substring(0, backspace.value.length - 1);
    
})