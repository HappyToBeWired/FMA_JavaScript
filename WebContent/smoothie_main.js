function smoothieOrder() {
  

var drinksAndSmoothies =   { "stock_status":     [
  {"product_id":"001","product_type":"smoothie","product_name":"Rasberry & Pear","brief_description":"Healthy combination of British fruits with a banana base.","in_stock_quantity":"50","ordered_quantity":"","image_location":"","price":"10.00"},
  {"product_id":"002","product_type":"smoothie","product_name":"Apricot & Dandilion","brief_description":"Weeds and a furry plum yum.","in_stock_quantity":"40","ordered_quantity":"","image_location":"","price":"12.00"},
  {"product_id":"003","product_type":"juice","product_name":"Ginger & Orange","brief_description":" A refreshing flavoured juice. ","in_stock_quantity":"80","ordered_quantity":"","image_location":"","price":"9.00"},
  {"product_id":"004","product_type":"smoothie","product_name":"Prune & Brussel Sprout","brief_description":"An explosive combination.","in_stock_quantity":"100","ordered_quantity":"","image_location":"","price":"11.00"},
  {"product_id":"005","product_type":"juice","product_name":"Strawberry & Lemongrass","brief_description":"Light and refreshing for the summer.","in_stock_quantity":"35","ordered_quantity":"","image_location":"","price":"12.50"},
  {"product_id":"006","product_type":"smoothie","product_name":"Plum & Juniper","brief_description":"Ginny and purple.","in_stock_quantity":"29","ordered_quantity":"","image_location":"","price":"9.75"},
  {"product_id":"007","product_type":"juice","product_name":"Grape & Honeysuckle","brief_description":"God knows what this is like.","in_stock_quantity":"5","ordered_quantity":"","image_location":"","price":"8.00"},
  {"product_id":"008","product_type":"juice","product_name":"Watercress & Orange","brief_description":"Probably horrible.","in_stock_quantity":"53","ordered_quantity":"","image_location":"","price":"9.00"},
  {"product_id":"009","product_type":"smoothie","product_name":"Plum & Pommegranate","brief_description":"It is a drink","in_stock_quantity":"3","ordered_quantity":"","image_location":"","price":"11.00"},
  {"product_id":"010","product_type":"juice","product_name":"Cow & Gate","brief_description":"More drink.","in_stock_quantity":"0","ordered_quantity":"58","image_location":"","price":"12.00"},
  {"product_id":"011","product_type":"smoothie","product_name":"Cheech & Chong","brief_description":"Another pointless combination.","in_stock_quantity":"12","ordered_quantity":"","image_location":"","price":"13.00"}
  
  ],
  "shopping_cart": [
     {"product_id":"001","ordered_quantity":"" }           
                    
     ]
     };
  
  
  

// truncates 2 parts of json stock status  name
 var stockView = drinksAndSmoothies.stock_status;
 var results = "";
// outputs stock in divs
  for(var i=0; i<stockView.length; i++) {
	  
	  results += "<div class='display'>";
      results += "<p>" + stockView[i].product_id + "</p>";  
      results += "<p>" + stockView[i].product_type + "</p>"; 
      results += "<h3>" + stockView[i].product_name + "</h3>";
      results += "<p>" + stockView[i].in_stock_quantity + "</p>";
      results += "</div>";

  }

 // results += "<table><br /> <br />";

  var div = document.getElementById("output");

      div.innerHTML = results;    

     
 
}

