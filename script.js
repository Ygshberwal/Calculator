function addlog(msg) {
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    var msg_text_node = document.createTextNode(msg);
    li.appendChild(msg_text_node);
    ul.appendChild(li);
}
function addlog(msg) {
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    var msg_text_node = document.createTextNode(msg);
    li.appendChild(msg_text_node);
    ul.appendChild(li);
}


function math_calculate() {
    var expression = document.getElementById("expression").value;
    console.log(expression);

    if (expression) {
        try {
            var answer = math.evaluate(expression);
            console.log(answer);
            document.getElementById("expression").value = "";

            // Update the result div with the calculated answer
            document.getElementById("result").innerHTML = "Result: " + answer;

            addlog(expression + "=" + answer);
        } catch (e) {
            addlog("\"" + expression + "\"  is a bad Expression... Please enter a valid expression");
        }
    } else {
        addlog("Please enter something to calculate");
    }
}
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        math_calculate();
        document.getElementById("expression").value = "";
    }
});


    function calculate(){		
    expression=document.getElementById("expression").value;
    console.log(expression);
    
    if (expression){
        try{
            answer=eval(expression)
            console.log(answer);
            document.getElementById("expression").value=answer;
            addlog(expression+"="+answer)
        }catch(e){
            addlog("\""+expression+"\"  is a sbad Expression... Please enter valid expression")
        }
    }
    else{
        addlog("Please enter something to calculate")
    }
} 

function input_number(v){
    expression=document.getElementById("expression").value;
    expression=expression+v;
    document.getElementById("expression").value=expression;
}

function clear1(){
    
    expression=document.getElementById("expression").value;
    expression=null;
    document.getElementById("expression").value=expression;
}

function back() {
    var value = document.getElementById("expression").value;
    document.getElementById("expression").value = value.substr(0, value.length - 1);
}

