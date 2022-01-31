let change_flag = true; 
let deg_flag = true;
let trigo_flag = true;
let hyp_flag = true;
let ef_flag = true;
//col-1 function change on pressing the 2nd button
function change_func() {
  if (change_flag) {
    document.getElementById("2nd").style.backgroundColor = "rgb(154, 194, 221)";
    document.getElementById("square").innerHTML = "x<sup>3</sup>";
    document.getElementById("root").innerHTML = "&#8731;x";
    document.getElementById("power").innerHTML = "<sup>y</sup>&radic;x";
    document.getElementById("pow10").innerHTML = "2<sup>x</sup>";
    document.getElementById("log").innerHTML = "log<sub>2</sub>x";
    document.getElementById("ln").innerHTML = "e<sup>x</sup>";
    change_flag = !change_flag;
  } else {
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
function trigo_second() {
  if (trigo_flag) {
    document.getElementById("second").style.backgroundColor = "rgb(154, 194, 221)";
    if (hyp_flag) {
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>";
      document.getElementById("trigo2").innerHTML = "cos<sup>-1</sup>";
      document.getElementById("trigo3").innerHTML = "tan<sup>-1</sup>";
      trigo_flag = !trigo_flag;
    } else {
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>h";
      document.getElementById("trigo2").innerHTML = "cos<sup>-1</sup>h";
      document.getElementById("trigo3").innerHTML = "tan<sup>-1</sup>h";
      trigo_flag = !trigo_flag;
    }
  } else {
    document.getElementById("second").style.backgroundColor = "var(--main_bg)";
    if (hyp_flag) {
      document.getElementById("trigo1").innerHTML = "sin";
      document.getElementById("trigo2").innerHTML = "cos";
      document.getElementById("trigo3").innerHTML = "tan";
      trigo_flag = !trigo_flag;
    } else {
      document.getElementById("trigo1").innerHTML = "sinh";
      document.getElementById("trigo2").innerHTML = "cosh";
      document.getElementById("trigo3").innerHTML = "tanh";
      trigo_flag = !trigo_flag;
    }
  }
}
// for hyp button under trigonomatry functions
function trigo_hyp() {
  if (hyp_flag) {
    document.getElementById("hyp").style.backgroundColor = "rgb(154, 194, 221)";
    if (trigo_flag) {
      document.getElementById("trigo1").innerHTML = "sinh";
      document.getElementById("trigo2").innerHTML = "cosh";
      document.getElementById("trigo3").innerHTML = "tanh";
      hyp_flag = !hyp_flag;
    } else {
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>h";
      document.getElementById("trigo2").innerHTML = "cos<sup>-1</sup>h";
      document.getElementById("trigo3").innerHTML = "tan<sup>-1</sup>h";
      hyp_flag = !hyp_flag;
    }
  } else {
    document.getElementById("hyp").style.backgroundColor = "var(--main_bg)";
    if (trigo_flag) {
      document.getElementById("trigo1").innerHTML = "sin";
      document.getElementById("trigo2").innerHTML = "cos";
      document.getElementById("trigo3").innerHTML = "tan";
      hyp_flag = !hyp_flag;
    } else {
      document.getElementById("trigo1").innerHTML = "sin<sup>-1</sup>";
      document.getElementById("trigo2").innerHTML = "sin<sup>-1</sup>";
      document.getElementById("trigo3").innerHTML = "sin<sup>-1</sup>";
      hyp_flag = !hyp_flag;
    }
  }
}
// function for evaluation:
function evaluate(expression) {
  let expr = expression.split("");
  let operand = [];     //operand stack
  let operator = [];    //operator stack
  for (let i = 0; i < expr.length; i++)
  {
    if (expr[i] == " ")
    {
      continue;
    }
    //for operands
    if (expr[i] >= "0" && expr[i] <= "9" 
       || expr[i] == "." || expr[i] == "-")
    {
      let num = "";
      while (i < expr.length && expr[i] >= "0" && expr[i] <= "9" || 
            expr[i] == "." || expr[i] == "-")
      {
        num = num + expr[i++];
      }
      operand.push(parseFloat(num));
      i--;
    }
    // for operators
    else if (expr[i] == "(")
    {     
      operator.push(expr[i]);     
    }
    else if (expr[i] == ")")
    {
      if (expr[i-2] == "-") {
        operand.push(expr[i-1]*-1);
      }
      while (operator[operator.length - 1] != "(") {
        operand.push(calculate(operator.pop(), operand.pop(), operand.pop()));
      }
      operator.pop();
    }
    else if (expr[i] == "+" || expr[i] == "–" 
    || expr[i] == "×" || expr[i] == "÷" 
    || expr [i] == "^" || expr[i] == "%" || expr[i] == "√")
    {
      while (operator.length > 0 
        && precedence(expr[i], operator[operator.length - 1]))
      {
        operand.push(
          calculate(operator.pop(), operand.pop(), operand.pop())
        );
      }
      operator.push(expr[i]);   
		}
	}
  while (operator.length > 0) {
    operand.push(calculate(operator.pop(), operand.pop(), operand.pop()));
  }
  return operand.pop();    //result 
}
// function to check precedence of operators.
// it will return true only if the operator 2 
//precedence is higher than operator1.
function precedence(operator1, operator2)
{
  if (operator2 == "(" || operator2 == ")" || operator2 == "-")
  {
    return false;
  }  
  if ((operator1 == "^" || operator1 == "√") 
  && (operator2 == "+" || operator2 == "–"))
  {
    return false;
  }
  if ((operator1 == "^" || operator1 == "√" || operator1 == "÷")
  && (operator2 == "×" || operator2 == "%"))
  {
    return false;
  }
  if ((operator1 == "×" || operator1 == "÷" || operator1 == "%")
   && (operator2 == "+" || operator2 == "–"))
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
    case "–":
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
let screen = document.getElementById("screen");
let history = document.getElementById("history");
let buttons = Array.from(document.getElementsByTagName("button"));
var memory = 0;
buttons.map(button => {
  button.addEventListener("click", (e) => {
    switch(e.target.innerText){
      case "C":
        screen.value = "";
        history.value = "";
        break;
      case "π":
        screen.value += Math.PI;   
        screen.value = screen.value;   
        break;
      case "e":
        screen.value += Math.E;
        screen.value = screen.value;       
        break;
      case "⌫":
        screen.value = screen.value.slice(0, -1);
        break;
      // operators
      case "mod":    
        history.value += screen.value + "%";
        screen.value = ""
        break;
      case "+":  
      case "–":  
      case "÷":
      case "×":
      case "(":
      case ")":
        history.value += screen.value + e.target.innerText;
        screen.value = "";
        break;
      case "±":
        screen.value *= -1;
        break;
      //factorial
      case "n!":
        if (screen.value > 0) {
          let fact = 1;
          for (i = 1; i <= screen.value; i++) {
              fact *= i;
          }
          screen.value = fact;
        }
        else if (screen.value == 0)
          screen.value = 1;
        else 
          screen.value = "invalid input";
        break;
      // converts -ve into +ve
      case "|x|":
        if(screen.value < 0)
          screen.value = screen.value*-1  
        break;
      //inverse
      case "1/x":
        if (screen.value == 0)
          screen.value = "infinity";
        else
          screen.value = 1/screen.value;
        break;
      //yth root
      case "√x":
        screen.value = Math.sqrt(screen.value);
        break;
      case "∛x":
        screen.value = Math.cbrt(screen.value);
        break;
      case "y√x":
        history.value += screen.value + "√";
        screen.value = ""
        break;
      //functions
      case "floor":
        screen.value = Math.floor(screen.value);
        break;
      case "ceiling":
        screen.value = Math.ceil(screen.value);
        break;
      case "round":
        screen.value = Math.round(screen.value);
        break;
      //power
      case "10x":
        screen.value = 10 ** screen.value;
        break;
      case "2x":
        screen.value = 2 ** screen.value;
        break;
      case "ex":
        screen.value = Math.E ** screen.value;
        break;
      //Trigonometric function
      case "sin":
        if (deg_flag) {
          screen.value = Math.sin(screen.value*Math.PI/180).toPrecision(10);
        }
        else {
          screen.value = Math.sin(screen.value).toPrecision(10);
        }
        break;
      case "cos":
        if (deg_flag) {
          screen.value = Math.cos(screen.value*Math.PI/180).toPrecision(10);
        }
        else {
          screen.value = Math.cos(screen.value).toPrecision(10);
        }
        break;
      case "tan":
        if (deg_flag) {
          screen.value = Math.tan(screen.value*Math.PI/180).toPrecision(10);
        }
        else {
          screen.value = Math.tan(screen.value).toPrecision(10);
        }
        break;
      case "sin-1":
        if (deg_flag) {
          screen.value = Math.asin(screen.value);
          screen.value = screen.value*180/Math.PI;
        }
        else {
          screen.value = Math.asin(screen.value);
        }
        break;
      case "cos-1":
        if (deg_flag) {
          screen.value = Math.acos(screen.value);
          screen.value = screen.value*180/Math.PI;
        }
        else{
          screen.value = Math.acos(screen.value);
        }
        break;
      case "tan-1":
        if (deg_flag) {
          screen.value = Math.atan(screen.value);
          screen.value = screen.value*180/Math.PI;
        }
        else{
          screen.value = Math.atan(screen.value);
        }
        break;
      case "sinh":
        if (deg_flag) {
          screen.value = Math.sinh(screen.value*Math.PI/180);
        }
        else {
          screen.value = Math.sinh(screen.value);
        }
        break;
      case "cosh":
        if (deg_flag) {
          screen.value = Math.cosh(screen.value*Math.PI/180);
        }
        else {
          screen.value = Math.cosh(screen.value);
        }
        break;
      case "tanh":
        if (deg_flag) {
          screen.value = Math.tanh(screen.value*Math.PI/180);
        }
        else {
          screen.value = Math.tanh(screen.value);
        }
        break;
      case "sin-1h":
        if (deg_flag) {
          screen.value = Math.asinh(screen.value);
          screen.value = screen.value*180/Math.PI;
        }
        else {
          screen.value = Math.asinh(screen.value);
        }
        break;
      case "cos-1h":
        if (deg_flag) {
          screen.value = Math.acosh(screen.value);
          screen.value = screen.value*180/Math.PI;
        }
        else {
          screen.value = Math.acosh(screen.value);
        }
        break;
      case "tan-1h":
        if (deg_flag) {
          screen.value = Math.atanh(screen.value);
          screen.value = screen.value*180/Math.PI;
        }
        else{
          screen.value = Math.atanh(screen.value);
        }
        break;
      // Memory Functions
      case "M+":
        document.getElementById("MR").disabled = false;
        document.getElementById("MC").disabled = false; 
        memory += parseFloat(screen.value);
        screen.value = ""
        break;
      case "M-":
        document.getElementById("MR").disabled = false;
        document.getElementById("MC").disabled = false; 
        memory -= parseFloat(screen.value);
        screen.value = ""
        break;
      case "MS":
        document.getElementById("MR").disabled = false;
        document.getElementById("MC").disabled = false; 
        memory = parseFloat(screen.value)
        break;
      case "MR":
        screen.value = memory;
        break;
      case "MC":
        memory = 0; 
        document.getElementById("MR").disabled = true;
        document.getElementById("MC").disabled = true;      
        break;
      //power 
      case "x3":
        screen.value = screen.value ** 3;    
        break;
      case "x2":
        screen.value = screen.value ** 2;
        break;
      case "xy":
        history.value += screen.value + "^";
        screen.value = ""
        break;
      //logarithm
      case "exp":
        var num = evaluate(screen.value);	
        screen.value = num.toExponential(10);
        break;	
      case "log":
        screen.value = Math.log10(screen.value);
        break;
      case "ln":
        screen.value = Math.log10(screen.value)/Math.log10(Math.PI);
        break;  
      case "log2x":
        screen.value = Math.log2(screen.value);
        break;
      // evaluate
      case "=":
        history.value += screen.value;
        screen.value = ""; 
        if(ef_flag) {
          screen.value = evaluate(history.value);
          history.value = "";        
        }
        else {
          screen.value = evaluate(history.value).toExponential(10);
          history.value = ""; 
        }
       break;
      case "hyp":
      case "2nd":
      case "nd":
        break;
      // Choice for the mode of calc
      case "DEG":
      case "RAD":
        if(deg_flag) {
          document.getElementById("deg").innerHTML = "RAD";
          deg_flag = !deg_flag
        } else {
          document.getElementById("deg").innerHTML = "DEG";
          deg_flag = !deg_flag;
        }
        break;
      // Choice for the mode of calc
      case "F-E":
        if(ef_flag) {
          document.getElementById("ef").style.background = "rgb(154, 194, 221)";
          ef_flag = ! ef_flag;    
        }
        else {
          document.getElementById("ef").style.background = "var(--main_bg)";
          ef_flag = ! ef_flag;
        }
        break;
      // default case (for numbers, operators and decimal.)
      default:
        screen.value += e.target.innerText;
    }
  });
})