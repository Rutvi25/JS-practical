let change_flag = true; 
let deg_flag = true;
let trigo_flag = true;
let hyp_flag = true;
//onclick deg
function deg(){
  if(deg_flag){
    document.getElementById("deg").innerHTML = "RAD";
    deg_flag = !deg_flag
  } else{
    document.getElementById("deg").innerHTML = "DEG";
    deg_flag = !deg_flag
  }
}
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
