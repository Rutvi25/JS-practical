let change_flag = true; 
let deg_flag = true;
let trigo_flag = true;
let hyp_flag = true;
let ef_flag = true;
//col-1 function change on pressing the 2nd button
function change_func(){
  if(change_flag){
    document.getElementById("2nd").style.backgroundColor = "rgb(154, 194, 221)";
    document.getElementById("square").innerHTML = "x<sup>3</sup>";
    document.getElementById("root").innerHTML = "&#8731;x";
    document.getElementById("power").innerHTML = "<sup>y</sup>&radic;x";
    document.getElementById("pow10").innerHTML = "2<sup>x</sup>";
    document.getElementById("log").innerHTML = "log<sub>y</sub>x";
    document.getElementById("ln").innerHTML = "e<sup>x</sup>";
    change_flag = !change_flag;
  }
  else{
    document.getElementById("2nd").style.backgroundColor = "var(--operator_bg)";
    document.getElementById("square").innerHTML = "x<sup>2</sup>";
    document.getElementById("root").innerHTML = "&radic;x";
    document.getElementById("power").innerHTML = "x<sup>y</sup>";
    document.getElementById("pow10").innerHTML = "10<sup>x</sup>";
    document.getElementById("log").innerHTML = "log";
    document.getElementById("ln").innerHTML = "ln";
    change_flag = !change_flag;
  }
}
// for 2nd button under trigonomatry functions
function trigo_second(){
  if(trigo_flag){
    document.getElementById("second").style.backgroundColor = "rgb(154, 194, 221)";
    if(hyp_flag){
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>";
      document.getElementById("trigo2").innerHTML = "cos<sup>-1</sup>";
      document.getElementById("trigo3").innerHTML = "tan<sup>-1</sup>";
      trigo_flag = !trigo_flag;
    }
    else{
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>h";
      document.getElementById("trigo2").innerHTML = "cos<sup>-1</sup>h";
      document.getElementById("trigo3").innerHTML = "tan<sup>-1</sup>h";
      trigo_flag = !trigo_flag;
    }
  }
  else{
    document.getElementById("second").style.backgroundColor = "var(--main_bg)";
    if(hyp_flag){
      document.getElementById("trigo1").innerHTML = "sin";
      document.getElementById("trigo2").innerHTML = "cos";
      document.getElementById("trigo3").innerHTML = "tan";
      trigo_flag = !trigo_flag;
    }
    else{
      document.getElementById("trigo1").innerHTML = "sinh";
      document.getElementById("trigo2").innerHTML = "cosh";
      document.getElementById("trigo3").innerHTML = "tanh";
      trigo_flag = !trigo_flag;
    }
  }
}
// for hyp button under trigonomatry functions
function trigo_hyp(){
  if(hyp_flag){
    document.getElementById("hyp").style.backgroundColor = "rgb(154, 194, 221)";
    if(trigo_flag){
      document.getElementById("trigo1").innerHTML = "sinh";
      document.getElementById("trigo2").innerHTML = "cosh";
      document.getElementById("trigo3").innerHTML = "tanh";
      hyp_flag = !hyp_flag;
    }
    else{
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>h";
      document.getElementById("trigo2").innerHTML = "cos<sup>-1</sup>h";
      document.getElementById("trigo3").innerHTML = "tan<sup>-1</sup>h";
      hyp_flag = !hyp_flag;
    }
  }
  else{
    document.getElementById("hyp").style.backgroundColor = "var(--main_bg)";
    if(trigo_flag){
      document.getElementById("trigo1").innerHTML = "sin";
      document.getElementById("trigo2").innerHTML = "cos";
      document.getElementById("trigo3").innerHTML = "tan";
      hyp_flag = !hyp_flag;
    }
    else{
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>";
      document.getElementById("trigo2").innerHTML = "sin<sup>-1</sup>";
      document.getElementById("trigo3").innerHTML = "sin<sup>-1</sup>";
      hyp_flag = !hyp_flag;
    }
  }
}
// function for evaluation:
function evaluate(expression){
  let expr = expression.split('');
  let operand = [];     //operand stack
  let operator = [];    //operator stack
  for (let i = 0; i < expr.length; i++)
  {
    if (expr[i] == ' ')
    {
      continue;
    }
    if (expr[i] >= '0' && expr[i] <= '9' || expr[i] == '.')
    {
      let num = "";
      while (i < expr.length && expr[i] >= '0' && expr[i] <= '9' || expr[i] == '.')
      {
        num = num + expr[i++];
      }
      operand.push(parseFloat(num));
      i--;
    }
    else if (expr[i] == '(')
    {
      operator.push(expr[i]);
    }
    else if (expr[i] == ')')
    {
      while (operator[operator.length - 1] != '('){
        operand.push(calculate(operator.pop(), operand.pop(), operand.pop()));
      }
      operator.pop();
    }
    else if (expr[i] == '+' || expr[i] == '-' || expr[i] == '×' || expr[i] == '÷' || expr [i] == '^' || expr[i] == "%" || expr[i] == "√")
    {
      while (operator.length > 0 && hasPrecedence(expr[i], operator[operator.length - 1]))
      {
        operand.push(calculate(operator.pop(), operand.pop(), operand.pop()));
      }
      operator.push(expr[i]);
		}
	}
  while (operator.length > 0)
  {
    operand.push(calculate(operator.pop(), operand.pop(), operand.pop()));
  }
  return operand.pop();    //result
}
	// Returns true if 'op2' has
	// higher or same precedence as 'op1',
	// otherwise returns false.
	function hasPrecedence(operator1, operator2)
	{
		if (operator2 == "(" || operator2 == ")")
		{
			return false;
		}  
    if ((operator1 == "^" || operator1 == "√") && (operator2 == "+" || operator2 == "-"))
		{
			return false;
		}
    if ((operator1 == "^" || operator1 == "√") && (operator2 == "×" || operator2 == "÷" || operator2 == "%"))
		{
			return false;
		}
		if ((operator1 == "×" || operator1 == "÷" || operator2 == "%") && (operator2 == "+" || operator2 == "-"))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function calculate(operator, b, a)
	{
		switch (operator){
      case "^":
        return a ** b;
      case "√":
        return b ** (1/a)
      case "%":
        return a%b;
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        if (b == 0)
        {
          screen.value = "infinity";
        }
        return parseFloat(a / b);
      }
      return 0;
	}
// Functionality
let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByTagName('button'));
var memory = 0;
buttons.map(button => {
  button.addEventListener("click", (e) => {
    switch(e.target.innerText){
      case "C":
        screen.value = "";
        break;
      case "π":
        screen.value += Math.PI;   
        screen.value = screen.value.slice(0,9);   
        break;
      case "e":
        screen.value += Math.E;
        screen.value = screen.value.slice(0,9);       
        break;
      case "mod":
        screen.value += "%";
        break;
      case "±":
        screen.value *= -1;
        break;
      case "⌫":
        screen.value = screen.value.slice(0, -1);
        break;
      case "n!":
        if (screen.value > 0){
          let fact = 1;
          for (i = 1; i <= screen.value; i++) {
              fact *= i;
          }
          screen.value = fact;
        }
        else if (screen.value == 0)
          screen.value = 1
        else 
          screen.value = "invalid input";
        break;
      case "|x|":
        if(screen.value < 0)
          screen.value = screen.value*-1  
        break;
      case "1/x":
        if (screen.value == 0)
          screen.value = "infinity";
        else
          screen.value = 1/screen.value;
        break;
      case "√x":
        screen.value += "2√";
        break;
      case "∛x":
        screen.value += "3√";
        break;
      case "y√x":
        screen.value += "√"
        break;
      case "floor":
        screen.value = Math.floor(screen.value);
        break;
      case "ceiling":
        screen.value = Math.ceil(screen.value);
        break;
      case "round":
        screen.value = Math.round(screen.value);
        break;
      case "M+":
        document.getElementById("MR").disabled = false;
        document.getElementById("MC").disabled = false; 
        memory += parseFloat(screen.value);
        screen.value = ''
        break;
      case "M-":
        document.getElementById("MR").disabled = false;
        document.getElementById("MC").disabled = false; 
        memory -= parseFloat(screen.value);
        screen.value = ''
        break;
      case "MS":
        document.getElementById("MR").disabled = false;
        document.getElementById("MC").disabled = false; 
        memory = parseFloat(screen.value)
        break;
      case "MR":
        screen.value = memory 
        break;
      case "MC":
        memory = 0; 
        document.getElementById("MR").disabled = true;
        document.getElementById("MC").disabled = true;      
        break;
      case "x3":
        screen.value = screen.value ** 3;    
        break;
      case "x2":
        screen.value = screen.value ** 2;
        break;
      case "xy":
        screen.value += "^";
        break;
      case "exp":
        var num = evaluate(screen.value);	
        screen.value = num.toExponential(10)
        break;	    
      case "=":
        if(ef_flag){
          screen.value = evaluate(screen.value);
        }
        else{
          screen.value = evaluate(screen.value).toExponential(10);
        }
        break;
      case "hyp":
      case "2nd":
      case "nd":
        break;
      case "DEG":
      case "RAD":
        if(deg_flag){
          document.getElementById("deg").innerHTML = "RAD";
          deg_flag = !deg_flag
        } else{
          document.getElementById("deg").innerHTML = "DEG";
          deg_flag = !deg_flag
        }
        break;
      case "F-E":
        if(ef_flag){
          document.getElementById("ef").style.background = "rgb(154, 194, 221)";
          ef_flag = ! ef_flag;    
        }
        else{
          document.getElementById("ef").style.background = "var(--main_bg)";
          ef_flag = ! ef_flag;
        }
        break;
      default:
        screen.value += e.target.innerText;
    }
  });
})