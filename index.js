
// selecting the input field as the display of the calculator.
let display=document.querySelector(".input");

//setting up all the keys using forEach loop.
document.querySelectorAll(".keys").forEach(function(key){
    key.addEventListener("click", function(){
        let data= key.innerHTML;
display.value+=data;
    });
});


//setting up the equal button to calculate the statement or give error if any.
document.querySelector(".button_equal").addEventListener("click", function(err){
if(display.value==0){
alert("no input");
}else{
    try{
     display.value= eval(display.value);
    }catch(err){
        alert("invalid");
    }
}
});


// setting up the arrow button to clear the last digit of the input field.
document.querySelector(".button_arrow").addEventListener("click", function(){
    display.value= display.value.slice(0, -1);
});


//setting up the cancel button to clear all text inside the input field.
document.querySelector(".button_cancel").addEventListener("click", function(){
    display.value="";
});