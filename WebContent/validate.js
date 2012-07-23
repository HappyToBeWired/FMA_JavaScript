

//GETS INPUTS

function Validate()
{
	var valMe = document.getElementById("creditCardNumber").value;
    var isVal=isValidCreditCard(valMe);
    var inform = document.getElementById("ypourote").innerHTML;
		
	document.getElementById("ypourote").innerHTML=valMe;
    document.getElementById("count").innerHTML=isVal;
    if(isVal== true)
    	{
    	inform="Thank you";
    	}
    else
        {
    	inform="Incorrect";
    	} 

} 
 
//tAKE  ARG FROM VALIDATE RTEURN S TRUE OR FALSE
function WebContent(creditCardNumber)
{	
var valid = new RegExp("[0-9]{16}");
return valid.test(creditCardNumber);
}

//DETECTS BROWSERVTYPE NO RETURN
function detectBrowser()
{
	var browName = navigator.appName;
    var browVersion = parseInt(navigator.appVersion);
    document.getElementById("browser").innerHTML= browName + " " + browVersion;
    
    if(browName == "Microsoft Internet Explorer")
    {
    	document.getElementById("warn").innerHTML="Youe using What!!!";
    	document.getElementById("browser").style.color="blue";
    	 
    }
    else
    {
    	
    	document.getElementById("warn").innerHTML="You've had your chips laddie";
    	document.getElementById("warn").style.color="red";
    	
    }
       
}


//returns value of 2 inputs plus 17.5%
getTotalInvoice(firstNum, secondNum);

{}
