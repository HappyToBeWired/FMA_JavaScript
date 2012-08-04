
//holds product detail
function productDetail()
{
	var drinksAndSmoothies =   
{ "stock_status":     [
                       
  {"product_id":"1","product_type":"smoothie","product_name":"Raspberry & Pear",
  "brief_description":"Healthy combination of British fruits with a banana base.",
  "in_stock_quantity":"50","image":"pearAndraspbery.jpeg","price":"10.00"},
  
  {"product_id":"2","product_type":"smoothie","product_name":"Apricot & Dandilion",
   "brief_description":"Weeds and a furry plum yum.",
   "in_stock_quantity":"40","image_location":"","price":"12.00"},
	  
  {"product_id":"3","product_type":"juice","product_name":"Ginger & Orange",
   "brief_description":" A refreshing flavoured juice. ",
   "in_stock_quantity":"80","image_location":"","price":"9.00"},
   
  {"product_id":"4","product_type":"smoothie","product_name":"Prune & Brussel Sprout",
   "brief_description":"An explosive combination.",
   "in_stock_quantity":"100","image_location":"","price":"11.00"},
   
  {"product_id":"5","product_type":"juice","product_name":"Strawberry & Lemongrass",
   "brief_description":"Light and refreshing for the summer.","in_stock_quantity":"35",
   "image_location":"","price":"12.50"},
   
  {"product_id":"6","product_type":"smoothie","product_name":"Plum & Juniper",
   "brief_description":"Ginny and purple.","in_stock_quantity":"29",
   "image_location":"","price":"9.75"},
   
  {"product_id":"7","product_type":"juice","product_name":"Grape & Honeysuckle",
   "brief_description":"God knows what this is like.","in_stock_quantity":"5",
   "image_location":"","price":"8.00"},
   
  {"product_id":"8","product_type":"juice","product_name":"Watercress & Orange",
   "brief_description":"Probably horrible.","in_stock_quantity":"53",
   "image_location":"","price":"9.00"},
   
  {"product_id":"9","product_type":"smoothie","product_name":"Plum & Pommegranate",
   "brief_description":"It is a drink","in_stock_quantity":"3",
   "image_location":"","price":"11.00"},
   
  {"product_id":"10","product_type":"juice","product_name":"Cow & Gate",
   "brief_description":"More drink.","in_stock_quantity":"0",
   "image_location":"","price":"12.00"},
   
  {"product_id":"11","product_type":"smoothie","product_name":"Cheech & Chong", 
   "brief_description":"Another pointless combination.","in_stock_quantity":"12",
   "image_location":"","price":"13.00"},
  
]
		
};
	
	return 	drinksAndSmoothies;
}



//https://github.com/symroe/fschack/wiki/Graph-JSON-Formats	
function cart(item)	
{	
var orderedItems =  
{"orders":[
{ product_id:"99",product_name:"Bacon & Egg",
	ordered_quantity:"22",price:"10.00"}                
]
};
return 	orderedItems;
}

function smoothieOrder() {
  
	var drinksAndSmoothies = productDetail();
 
//truncates 2 parts of json stock status  name
var stockView = drinksAndSmoothies.stock_status;  


 var results = "";
// outputs stock in divs
  for(var i=0; i<stockView.length; i++) 
  {
	  var ident = stockView[i].product_id;
	  results += "<div class=\"display\">";
	  var name = stockView[i].product_name;
	  results += "<h3>" + name + "</h3>";
	  results += "<p>Product Number: <span>" + ident + "</span></p>";  
      results += "<p>Product Type: <span>" + stockView[i].product_type + "</span></p>"; 
      var price = stockView[i].price;
      results += "<p>£<span>" + price + "</span> per case.</p>";
      var stock =stockView[i].in_stock_quantity;
      results += "<p>In Stock: <span>" + stock + "</span></p>";
      results += "<img src='images/" + stockView[i].image +  "'alt='" + stockView[i].image + "'height='100' width='100' />";
      //
      //CREATE OBJECT FOR DROPDOWN & ADD SET ATTRIBUTES. DO THIS THROUGH A FUNCTION.
      //
     
      // http://stackoverflow.com/questions/7203820/javascript-add-attribute-method-question
      var selector = Dropdown(stock,ident);
      results += selector;
      //call function to add to cart
      //REM to put back in ident as arg
      var button = "<input type='button' onclick='pushtoCartJson("+ ident +")'>";
      results += button;
      results += "</div>";
      var div = document.getElementById("output");
      div.innerHTML = results; 
      }
 
  }
 //stack overflow http://stackoverflow.com/questions/5182772/append-option-to-select-menu//
//http://www.javascriptkit.com/javatutors/selectcontent.shtml//
function Dropdown(stock,ident){
	var ident = ident;
	var stock = stock;
	var selector = "<p>Pick the Quantity</p><select name= '"+ ident + "' id = '"  + ident + "'>";
	for(var i=0; i<=stock; i++)
	  {
		selector +=   "<option value='" + i + "'>" + i + "</option>";
	  }
	selector +=	"</select>";
   
	return selector;	
}
//CONVERT TO JSON PUSH AND SHOPPING CART

function pushtoCartJson(ident)
{
    var ident = ident;	
    var drinksAndSmoothies = productDetail();	
    //truncates 2 parts of json stock status  name
    var stockView = drinksAndSmoothies.stock_status; 	
    var amount = document.getElementById(ident).selectedIndex;
    
    //http://stackoverflow.com/questions/1182082/check-for-a-value-in-a-json-object
    var orderedItems = cart();
    pushToCart = orderedItems.orders;	
    for(var j=0; j<stockView.length; j++) 
    {	
   	 if(stockView[j].product_id == ident)
   		pushToCart.push({ product_id:stockView[j].product_id,product_name:stockView[j].product_name,
       	 price:stockView[j].price, ordered_quantity:amount});
   	   
    }  
    
    
    for(var k=0; k<pushToCart.length; k++) 
         {	
         var results ="<div>";	
       	 results += "<p style='background-color:blue'>" + pushToCart[k].product_id + pushToCart[k].product_name + pushToCart[k].price + pushToCart[k].ordered_quantity
       	 +"</p>"; 
       	results +="</div>";
         }
    var div =  document.getElementById("cart");
    div.innerHTML = results; 
    
    return orderItem;
    
     }
    
//end of push to cart




//CREATE REGEX FOR FORM FEILDS
//CREATE Classes for regex
//http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/
//Credit Card Number Validation

function ValidateCreditCardNumber(id)
{
	var valMe = document.getElementById("CreditCardNumber").value;
	var isVal=isValidCreditCard(valMe);
} 
function isValidCreditCard(creditCardNumber)
{	
var valid = new RegExp("[0-9]{16}");

//return valid.test(creditCardNumber);
if(valid == true)
	{
	inform="Thank You";
	}
else
    {
	inform="Not a valid Number ";
	} 
document.getElementById("creditCardReply").innerHTML=inform; 

}


//CVS validation
function ValidateCVSNumber()
{
	var valMe = document.getElementById("CVS").value;
    var isVal=isValidCVS(valMe);
    if(isVal== true)
    	{
    	inform="Thank You";
    	}
    else
        {
    	inform="Not a valid Number ";
    	} 
    document.getElementById("CVSReply").innerHTML=inform;   

} 

function isValidCVS(cvs)
{	
var valid = new RegExp("[0-9]{3}");
return valid.test(cvs);
}




//EXTEND REGEX CLASSES TO TRIGGER ON SUBMIT AND PREVENT SUBMISSION
// ADD ITEMS TO CART ALSO REMOVE WHEN DELETED USE MORE JSON
//CREATE PRINT RECIEPT



