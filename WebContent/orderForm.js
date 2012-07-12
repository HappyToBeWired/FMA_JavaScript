
//MAIN
//function orderForm()
//{ var one = document.getElementById("one").value;
//  var two = document.getElementById("two").value;
//  
// var ans = getTotalInvoice(one, two);
//  
////document.getElementById("outTot").innerHTML=add;
//  
//}

//returns value of 2 inputs plus 17.5%

function getTotalInvoice() 
{    
	var firstNum  = Number(document.getElementById("one").value);
	var secondNum = Number(document.getElementById("two").value);
	var rate = 17.5;
	rate = 1+(rate/100);
   // var outPut = (firstNum + secondNum) * rate;
    var output = calculation(firstNum, secondNum, rate);
	document.getElementById("outTot").innerHTML=output;
}

function calculation(prim, sec, rate)
{
x = (prim + sec) * rate;	
return x;	

}


