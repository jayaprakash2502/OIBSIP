let value="";


function getvalue(val){
    value+=val;
    document.getElementById('text').value=value;
    
}
document.getElementById('text').addEventListener('keydown', (event) => {
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9',
                         '+','-','*','/','%','.','Backspace','Delete',
                         'ArrowLeft','ArrowRight','Enter'];

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();  
    }
})
 

document.getElementById('ac').addEventListener('click',()=>{
    value="";
    document.getElementById('text').value=value;
})

    document.getElementById('press').addEventListener('click' ,()=>{
    document.getElementById('text').value=evalu(value);}
)

document.getElementById('text').addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
                event.preventDefault();

        let value=document.getElementById('text').value;
            document.getElementById('text').value=evalu(value);
        value=document.getElementById('text').value;
    }

    }
)



document.querySelector('.remove') .addEventListener('click',()=>{
    value = document.getElementById('text').value.slice(0, -1);
    document.getElementById('text').value = value;
    

})


function evalu(value){
    try{

        let a=eval(value);
        if(Number.isInteger(a))
                return a;
        else{
            return parseFloat(a.toFixed(5));

    }
    }catch{
        return "Error"
    }    
}

document.querySelector('.plusminus').addEventListener('click', () => {
    let input = document.getElementById('text');
    let str = input.value;

    
    let match = str.match(/(\(-?\d+(\.\d+)?\)|\d+(\.\d+)?)$/);

    if (!match)
         return;

    let lastNum = match[0];
    let before = str.slice(0, str.length - lastNum.length);

    if (/^\(-/.test(lastNum)) 
        lastNum = lastNum.slice(2, -1); 
    else 
        lastNum = "(-" + lastNum + ")";
    

    input.value = before + lastNum;
    value = input.value;
});


