let display=document.querySelector("#display") ;
let btnClear=document.querySelector("#btn-clear") ;
let btnClearLastAction=document.querySelector("#btn-clear-last-action") ;
let btnBackSpace=document.querySelector("#btn-back-space") ;
let btnDiv=document.querySelector("#btn-Div") ;
let btnMul=document.querySelector("#btn-mul") ;
let btnMinus=document.querySelector("#btn-minus") ;
let btnPlus=document.querySelector("#btn-plus") ;
let btnPN=document.querySelector("#btn-pn") ;
let btnPoint=document.querySelector("#btn-point") ;
let btnEquls=document.querySelector("#btn-equls") ;
let btnNumbers=document.querySelectorAll(".btn-number") ;

let setpoint=false ;
let numberone,numbertwo,result ;
let op="" ;
let setResult=false ;

btnClear.addEventListener('click' , (e)=>{
    display.textContent="0.0"
    setpoint=false ;
    setResult=false ;
    numbertwo=0 ;
    numberone=0 ;
     
})

btnPlus.addEventListener('click' , (e)=>{
    numberone=Number(display.textContent) ;
    display.textContent="0.0" ;
    op="+"
})

btnMinus.addEventListener('click' , (e)=>{
    numberone=Number(display.textContent) ;
    display.textContent="0.0" ;
    op="-"
})
btnDiv.addEventListener('click' , (e)=>{
    numberone=Number(display.textContent) ;
    display.textContent="0.0" ;
    op="/"
})
btnMul.addEventListener('click' , (e)=>{
    numberone=Number(display.textContent) ;
    display.textContent="0.0" ;
    op="*"
})

btnClearLastAction.addEventListener('click' , (e)=>{
    display.textContent="0.0"
})

btnEquls.addEventListener('click' , (e)=>{
    if(setResult==false){
        numbertwo=Number(display.textContent) ;
    }else{
        numberone=Number(display.textContent) ;
    }
    switch (op){
        case "+":
            result=numberone+numbertwo ;
        break ;
        case "-":
            result=numberone-numbertwo ;
        break ;
        case "*":
            result=numberone*numbertwo ;
        break ;
        case "/":
            result=numberone/numbertwo ;
        break ;
    }
    display.textContent=result;
    setResult=true    
})



btnBackSpace.addEventListener('click' , (e)=>{
    let len=display.textContent.length;
    let lastdigi=display.textContent.substr(len - 1,len)

    if(lastdigi=="."){
        setpoint=false ;
    }

    if(len>1){
        display.textContent=display.textContent.substr(0,len-1) ;
    }else{
            display.textContent ="0.0" ;
    }
})

btnPN.addEventListener('click' , (e)=>{
    display.textContent=display.textContent * -1 ;
})

btnPoint.addEventListener('click' , (e)=>{
    if(setpoint==false){
        display.textContent +=".";
        setpoint=true
    }
})


btnNumbers.forEach((item)=>{
    item.addEventListener('click' , (e)=>{
        if(display.textContent=="0.0"){
            display.textContent=e.target.textContent;
           
        }else{
            display.textContent += e.target.textContent
        }
    })
})

