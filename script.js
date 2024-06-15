function addLog(msg){
    var ul=document.getElementById('log')
    var li=document.createElement("li")
    var msg_text=document.createTextNode(msg)

    li.appendChild(msg_text)
    ul.appendChild(li)

}

function calculate(){
    // alert("called")
    expression=document.getElementById("expression").value
    // console.log(expression);
    if (expression){
        try{
            ans=eval(expression)
            // console.log(ans)
            document.getElementById("expression").value=ans
            addLog(expression+"="+ans)
        }
        catch(e){
            // alert("Bad expression")
            document.getElementById("expression").value=""
            addLog(expression+" is bad, please fix it")
        }
    }
    
}


function math_calculate(){
    // alert("called")
    expression=document.getElementById("expression").value
    // console.log(expression);
    if (expression){
        try{
            ans=math.evaluate(expression)
            // console.log(ans)
            document.getElementById("expression").value=ans
            document.getElementById("expression").value=""
            addLog(expression+"="+ans)
        }
        catch(e){
            // alert("Bad expression")
            document.getElementById("expression").value=""
            addLog("\"" + expression + "\"  is a bad Expression... Please enter a valid expression");
        }
    }
    else{
        addLog("Please enter something to calculate");

    }
}
// Add event listener for keypress event to trigger calculation on Enter key press
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        math_calculate();
    }
});

