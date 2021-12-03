let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('button')
let screenValue =''
for (item of buttons){
    item.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        console.log(buttonText)
        if(buttonText =='X'){
            buttonText='*'
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText == "C"){
            buttonText=''
            screenValue=''
            screen.value=''
            
        }
        else if(buttonText == "="){
            buttonText= eval(screenValue)
            screenValue=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="BKS"){
            var number=screen.value;
            var len=number.length-1;
            var newnumber=number.substring(0,len);
            buttonText=newnumber;
            screenValue=newnumber;
            screen.value=newnumber;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue; 
        }
    })
}