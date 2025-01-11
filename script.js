

let celciusToFarhanite= document.querySelector(`#celciusToFarhanite`);
let farhaniteToCelsius= document.querySelector(`#farhaniteToCelsius`);
let myH1= document.getElementById(`myH1`);



function converter(){
    let entery= document.getElementById(`textArea`).value;
    if(celciusToFarhanite.checked){
    result= ((9/5)*entery + 32)  +`°F`;
    }
    else if(farhaniteToCelsius.checked){
        result=( 5/9*(entery- 32)) + `°C` ;
    }
    else{
        result= `select unit of measurment`
    }
 myH1.textContent= `${result}`
 
}
