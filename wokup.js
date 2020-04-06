//--------------Months fruits and vegetables list---------------------
var jan_fruits = ["Almond","Lemon","Clementine","Persimmon","Kiwi","Mandarin","Orange","Grapefruit","Physalis","Pear","Apple"]
var jan_veges = ["Garlic","Beetroot","Carrot","Celery","Celeriac","Cabbage","Kale","Squash","Endive","Spinach","Turnip","Onion","Parsnip","Leek","Potato","Salsify","Sunroot"]

var feb_fruits = ["Almond","Lemon","Clementine","Kiwi","Mandarin","Orange","Grapefruit","Physalis","Pear","Apple"]
var feb_veges = ["Garlic","Beetroot","Carrot","Celeriac","Cabbage","Kale","Endive","Spinach","Turnip","Onion","Parsnip","Leek","Potato","Radish","Salsify","Sunroot"]

var mar_fruits = ["Almond","Lemon","Kiwi","Orange","Grapefruit","Pear","Apple"]
var mar_veges = ["Chard","Garlic","Asparagus","Beetroot","Carrot","Celeriac","Cabbage","Cauliflower","Endive","Spinach","Turnip","Onion","Parsnip","Leek","Potato","Radish","Salsify","Sunroot"]

var apr_fruits = ["Almond","Lemon","Grapefruit","Pear","Apple"]
var apr_veges = ["Chard","Garlic","Artichoke","Asparagus","Beetroot","Carrot","Cauliflower","Cucumber","Endive","Spinach","Lettuce","Turnip","Onion","Peas","Leek","Potato","Radish"]

var may_fruits = ["Almond","Cherry","Strawberry","Grapefruit","Rhubarb","Tomato"]
var may_veges = ["Chard","Garlic", "Artichoke", "Asparagus", "Eggplant", "Beetroot", "Carrot", "Cauliflower", "Cucumber", "Zucchini", "Spinach", "Lettuce", "Turnip", "Onion", "Peas", "Potato", "Radish"]

var jun_fruits = ["Apricot","Almond","Nectarine","Blackcurrant","Cherry","Lemon","Strawberry","Raspberry","Redcurrant","Melon","Grapefruit","Watermelon","Peach","Apple","Plum","Rhubarb","Tomato"]
var jun_veges = ["Chard","Garlic","Artichoke","Asparagus","Eggplant","Beetroot","Broccoli","Carrot","Romanesco","Cucumber","Zucchini","Spinach","Fennel","Green Bean","Lettuce","Turnip","Onion","Peas","Pepper","Potato","Radish"]

var jul_fruits = ["Apricot","Almond","Blackcurrant","Cherry","Fig","Strawberry","Raspberry","Redcurrant","Melon","Blueberry","Nectarine","Watermelon","Peach","Pear","Plum","Rhubarb","Tomato"]
var jul_veges = ["Chard","Garlic","Artichoke","Asparagus","Eggplant","Beetroot","Broccoli","Carrot","Celery","Romanesco","Cucumber","Zucchini","Spinach","Fennel","Green Bean","Lettuce","Onion","Peas","Pepper","Potato","Radish"]

var aug_fruits = ["Apricot","Almond","Blackcurrant","Fig","Strawberry","Raspberry","Redcurrant","Melon","Mirabelle","Blackberry","Blueberry","Nectarine","Hazelnut","Watermelon","Peach","Pear","Apple","Plum","Prune","Grape","Tomato"]
var aug_veges = ["Chard","Garlic","Artichoke","Eggplant","Beetroot","Broccoli","Carrot","Celery","Cabbage","Romanesco","Cucumber","Squash","Zucchini","Spinach","Fennel","Green Bean","Lettuce","Onion","Pepper","Potato","Radish"]

var sep_fruits = ["Almond","Quince","Fig","Melon","Mirabelle","Blackberry","Blueberry","Hazelnut","Walnut","Watermelon","Peach","Pear","Apple","Plum","Prune","Grape","Tomato"]
var sep_veges = ["Chard","Garlic","Artichoke","Eggplant","Beetroot","Broccoli","Carrot","Celery","Cabbage","Cauliflower","Kale","Romanesco","Cucumber","Squash","Zucchini","Spinach","Fennel","Green Bean","Lettuce","Onion","Parsnip","Sweet Potato","Leek","Pepper","Potato","Pumpkin","Radish"]

var oct_fruits = ["Almond","Chestnut","Lemon","Quince","Fig","Raspberry","Persimmon","Blueberry","Hazelnut","Walnut","Physalis","Pear","Apple","Grape","Tomato"]
var oct_veges = ["Chard","Garlic","Eggplant","Beetroot","Broccoli","Carrot","Celery","Celeriac","Cabbage","Cauliflower","Kale","Cucumber","Squash","Zucchini","Shallot","Endive","Spinach","Fennel","Green Bean","Lettuce","Turnip","Onion","Parsnip","Sweet Potato","Leek","Potato","Pumpkin","Radish","Rutabaga","Salsify","Sunroot"]

var nov_fruits = ["Almond", "Chestnut", "Lemon", "Clementine", "Quince", "Persimmon", "Kiwi", "Mandarin", "Orange", "Physalis", "Pear", "Apple"]
var nov_veges = ["Garlic","Beetroot","Broccoli","Cardon","Carrot","Celery","Celeriac","Cabbage","Cauliflower","Kale","Pumpkin","Squash","Shallot","Endive","Spinach","Fennel","Turnip","Onion","Parsnip","Leek","Potato","Pumpkin","Radish","Rutabaga","Salsify","Sunroot"]

var dec_fruits = ["Almond","Chestnut","Lemon","Clementine","Persimmon","Kiwi","Mandarin","Orange","Physalis","Pear","Apple"]
var dec_veges = ["Garlic","Beetroot","Carrot","Celery","Celeriac","Cabbage","Kale","Squash","Shallot","Endive","Spinach","Turnip","Onion","Parsnip","Leek","Potato","Pumpkin","Radish","Rutabaga","Salsify","Sunroot"]

//----------------------------GLOBAR VARIABLES ---------------------------------
var hit_number=0;

var current_recipe={
	item:"",
 ingredients:[],
 picture_src:"",
 label:"",
 recipe_url:""
}

var nutrients={
	energy_kcal:["Energy","",""],
	fat:["Fat","",""],
	sugars:["Sugars","",""],
	carbs:["Carbs","",""],
	fibers:["Fibers","",""],
	proteins:["Proteins","",""],
	sodium:["Sodium","",""]
}

var diet_restriction=""

var health_restriction=""

//---------------------------------USEFUL FUNCTIONS-------------------------

function format_title(elem){
 return title=elem.toLowerCase().replace(' ','')
}

//------------------------FUNCTIONS FOR STYLE-----------------------------
// When the user scrolls down 50px from the top of the document, resize the header's font size
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
			document.getElementById("header").style.top="0px";
			document.getElementById("header").style.boxShadow="0px 3px 3px #888888";
			document.getElementById("h1").style.fontSize = "20px";
			document.getElementById("titleImg").style.width = "2%";


  } else {
    document.getElementById("h1").style.fontSize = "55px";
				document.getElementById("header").style.top="15px";
				document.getElementById("titleImg").style.width = "7%";
				document.getElementById("header").style.boxShadow="0px 0px 0px #888888";
  }
}

//---------------FORM VALUES FOR DIET RESTRICTIONS FOR API CALL--------------
function resetForm(){
	$('input[type=radio]').each(function(i) {	$(this)[0].checked = false;});
	diet_restriction="";
	health_restriction="";

}

function dietRestriction(){
	//update diet restrictions list
	diet_restriction=$("input[name='diet']").filter(":checked")[0].value;
	if (diet_restriction.toLowerCase()=='none'){
		diet_restriction="";
	};
}

function healthRestriction(){
	//update diet restrictions list
	health_restriction=$("input[name='health']").filter(":checked")[0].value;
	if (health_restriction.toLowerCase()=='none'){
		health_restriction="";
	};
}

function resetButtonColor(){
	//button style : reset all other colors
	$(".btn").css({"background-color":"#E6F7D9","color":"#487A24"});
	$(".btn span").css({"background-color":"#E6F7D9","color":"#487A24"});
	$(".btn").hover(
		function(){
			$(this).css({"background-color":"#315219","color":"#FFFFFF"});
			$(this).find("span").css({"background-color":"#315219","color":"#FFFFFF"});
		},
	 function(){
			$(this).css({"background-color":"#E6F7D9","color":"#487A24"});
			$(this).find("span").css({"background-color":"#E6F7D9","color":"#487A24"});
		}
	  );
}


function createElementRecipe(){
 //Clean current recipe
 $(".recipe").empty()
 //Create ELement Recipe
 console.log('then we create the recipe element')
	var title=$('<h2/>').text("Recipe")
 var recipe_details=$('<table/>',{"class":"recipe-details"});
	var recipe_label=$('<tr>',{"class":"label"}).append($('<div/>').append($('<th/>',{"class":"recipe-label"}).text(current_recipe.label)));
 var recipe_img= $('<tr>').append($('<td>').append($("<img>", { src : current_recipe.picture_src})));
 var recipe_ingredients=$('<tr>').append($('<td>').append($('<ul/>',{"class":"recipe-ingredients"}))).text("Ingredients");
 for(var i=0; i<current_recipe.ingredients.length; i++){
  var ingredient_line=$('<li/>',{"itemprop":"ingredients"}).text(current_recipe.ingredients[i]);
  ingredient_line.appendTo(recipe_ingredients);
  }
 var recipe_prep=$('<tr>').append($('<td>').append($('<a/>',{"class":"recipe-preparation", "href":current_recipe.recipe_url,"target":"_blank"}).text("Click for preparation instructions!")));
	//Add button to browse another recipe
	var browse_button=$('<tr>').append($('<td>').append($("<button>", { "class" : "browse", "onclick":"browseRecipe()"}).text("Next >")));

//Popup if we reach the maximum of recipes
	var modal=$('<div/>',{"id":"modalNoRecipe","class":"modal"});
	var modal_content=$('<div/>',{"class":"modal-content"});
	var close_btn=$('<span/>',{"class":"close"}).html("&times;");
	var modal_text=$('<p/>').html('No more recipes! <br/> Change your filters ;)');
	modal_content.append(close_btn,modal_text);
	modal_content.appendTo(modal);

	browse_button.append(modal);

 recipe_details.append(recipe_label,recipe_img,recipe_ingredients,recipe_prep,browse_button);
	title.appendTo($(".recipe"));
 recipe_details.appendTo($(".recipe"));

}

function createElementNutrient(){
	//$(".recipe").append($('<section/>',{"class":"nutrition"}));
	$(".label").append($('<div/>',{"class":"nutrition"}));
	var title=$('<h3/>').append($('<a/>',{"class":"nutrition-hover","href":"#", "id":"nutritionHover","title":"Nutrition"}).text("Nutrition details"));
	var content=$('<div/>',{"id":"nutritionTable"});
 var table=$('<table/>',{"class":"nutrients-table"});
	var header=$('<tr>').append($('<th/>').text("Label"),$('<th/>').text("Value"),$('<th/>').text("Unit"));
 var energy= $('<tr>').append($('<td>').text(nutrients.energy_kcal[0]),$('<td>').text(nutrients.energy_kcal[1]),$('<td>').text(nutrients.energy_kcal[2]));
	var fat= $('<tr>').append($('<td>').text(nutrients.fat[0]),$('<td>').text(nutrients.fat[1]),$('<td>').text(nutrients.fat[2]));
	var sugars= $('<tr>').append($('<td>').text(nutrients.sugars[0]),$('<td>').text(nutrients.sugars[1]),$('<td>').text(nutrients.sugars[2]));
	var carbs= $('<tr>').append($('<td>').text(nutrients.carbs[0]),$('<td>').text(nutrients.carbs[1]),$('<td>').text(nutrients.carbs[2]));
	var fibers= $('<tr>').append($('<td>').text(nutrients.fibers[0]),$('<td>').text(nutrients.fibers[1]),$('<td>').text(nutrients.fibers[2]));
	var proteins= $('<tr>').append($('<td>').text(nutrients.proteins[0]),$('<td>').text(nutrients.proteins[1]),$('<td>').text(nutrients.proteins[2]));
	var sodium= $('<tr>').append($('<td>').text(nutrients.sodium[0]),$('<td>').text(nutrients.sodium[1]),$('<td>').text(nutrients.sodium[2]));
	table.append(header,energy,fat,sugars,carbs,fibers,proteins,sodium);
	table.appendTo(content)
	title.appendTo($(".nutrition"));
	content.appendTo($(".nutrition"));
	$( "#nutritionHover").tooltip({content: $('#nutritionTable').html()});

}

function browseRecipe(){
	hit_number=hit_number+1;
	getRecipe(current_recipe.item,hit_number,diet_restriction,health_restriction);

}


//--------------------- API CALL TO GET RECIPE ----------------------------------

//https://developer.edamam.com/edamam-docs-recipe-api
function getRecipe(item,hit_number,diet_restriction,health_restriction) {
	if(diet_restriction=="" && health_restriction==""){
		$.ajax({
						url : "https://api.edamam.com/search",
						data : { q : item, app_id : "5ac9f426", app_key : "325ef501179fc01f0a4b7099f96d6c66", from: "0", to: "10"},
						dataType: "json",
						type: "GET",
						success: function (JSONDocument) {
										successFunction(item, hit_number,diet_restriction,health_restriction,JSONDocument);
									},
						error: processError,
		});

	}
	else if (diet_restriction=="" && health_restriction!="") {
		$.ajax({
						url : "https://api.edamam.com/search",
						data : { q : item, app_id : "5ac9f426", app_key : "325ef501179fc01f0a4b7099f96d6c66", from: "0", to: "10", health: health_restriction},
						dataType: "json",
						type: "GET",
						success: function (JSONDocument) {
										successFunction(item, hit_number,diet_restriction,health_restriction,JSONDocument);
									},
						error: processError,
		});

	}
	else if (diet_restriction!="" && health_restriction=="") {
		$.ajax({
						url : "https://api.edamam.com/search",
						data : { q : item, app_id : "5ac9f426", app_key : "325ef501179fc01f0a4b7099f96d6c66", from: "0", to: "10", diet: diet_restriction},
						dataType: "json",
						type: "GET",
						success: function (JSONDocument) {
										successFunction(item, hit_number,diet_restriction,health_restriction,JSONDocument);
									},
						error: processError,
		});

	}
	else {

		$.ajax({
						url : "https://api.edamam.com/search",
						data : { q : item, app_id : "5ac9f426", app_key : "325ef501179fc01f0a4b7099f96d6c66", from: "0", to: "10", diet:diet_restriction, health: health_restriction},
						dataType: "json",
						type: "GET",
						success: function (JSONDocument) {
										successFunction(item, hit_number,diet_restriction,health_restriction,JSONDocument);
									},
						error: processError,
		});

	}

}

function successFunction(item,hit_number,diet_restriction,health_restriction,JSONDocument){
 //Update values of current recipe
 console.log('success');
 console.log(JSONDocument);
	current_recipe.item=item;
 current_recipe.ingredients=JSONDocument['hits'][hit_number]['recipe']['ingredientLines'];
 current_recipe.picture_src=JSONDocument['hits'][hit_number]['recipe']['image'];
 current_recipe.label=JSONDocument['hits'][hit_number]['recipe']['label'];
 current_recipe.recipe_url=JSONDocument['hits'][hit_number]['recipe']['url'];

	//Update nutrients values
	//nutrient : [label,value,unit]
	nutrients.energy_kcal[1]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['ENERC_KCAL']['quantity'].toFixed(0);
	nutrients.energy_kcal[2]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['ENERC_KCAL']['unit'];
	nutrients.fat[1]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['FAT']['quantity'].toFixed(0);
	nutrients.fat[2]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['FAT']['unit'];
	nutrients.sugars[1]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['SUGAR']['quantity'].toFixed(0);
	nutrients.sugars[2]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['SUGAR']['unit'];
	nutrients.carbs[1]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['CHOCDF']['quantity'].toFixed(0);
	nutrients.carbs[2]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['CHOCDF']['unit'];
	nutrients.fibers[1]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['FIBTG']['quantity'].toFixed(0);
	nutrients.fibers[2]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['FIBTG']['unit'];
	nutrients.proteins[1]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['PROCNT']['quantity'].toFixed(0);
	nutrients.proteins[2]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['PROCNT']['unit'];
	nutrients.sodium[1]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['NA']['quantity'].toFixed(0);
	nutrients.sodium[2]=JSONDocument['hits'][hit_number]['recipe']['totalNutrients']['NA']['unit'];


 createElementRecipe();
	createElementNutrient();
}


function processError(jqXHR, textStatus, errorThrown) {
  console.log(errorThrown + " : " + textStatus);
		//No recipe with the selected filters
		// Get the modal
		var modal = document.getElementById("modalNoRecipe");
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { modal.style.display = "none";}
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {if (event.target == modal) {modal.style.display = "none";}}
}


//----------------------------------JANUARY-------------------------------
function jan_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#jan").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#jan").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('January Fruits').appendTo(fruits);

 for (var i = 0; i < jan_fruits.length; i++){
  var fruit_txt=format_title(jan_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(jan_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('January Vegetables').appendTo(veges);
for (var i = 0; i < jan_veges.length; i++){
 var vege_txt=format_title(jan_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(jan_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------FEBRUARY-------------------------------
function feb_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#feb").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#feb").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('February Fruits').appendTo(fruits);

 for (var i = 0; i < feb_fruits.length; i++){
  var fruit_txt=format_title(feb_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(feb_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('February Vegetables').appendTo(veges);
for (var i = 0; i < feb_veges.length; i++){
 var vege_txt=format_title(feb_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(feb_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------MARCH-------------------------------
function mar_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#mar").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#mar").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('March Fruits').appendTo(fruits);

 for (var i = 0; i < mar_fruits.length; i++){
  var fruit_txt=format_title(mar_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(mar_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('March Vegetables').appendTo(veges);
for (var i = 0; i < mar_veges.length; i++){
 var vege_txt=format_title(mar_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(mar_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------APRIL-------------------------------
function apr_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#apr").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#apr").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('April Fruits').appendTo(fruits);

 for (var i = 0; i < apr_fruits.length; i++){
  var fruit_txt=format_title(apr_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(apr_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('April Vegetables').appendTo(veges);
for (var i = 0; i < apr_veges.length; i++){
 var vege_txt=format_title(apr_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(apr_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------MAY-------------------------------
function may_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#may").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#may").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('May Fruits').appendTo(fruits);

 for (var i = 0; i < may_fruits.length; i++){
  var fruit_txt=format_title(may_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(may_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('May Vegetables').appendTo(veges);
for (var i = 0; i < may_veges.length; i++){
 var vege_txt=format_title(may_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(may_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------JUNE-------------------------------
function jun_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#jun").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#jun").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('June Fruits').appendTo(fruits);

 for (var i = 0; i < jun_fruits.length; i++){
  var fruit_txt=format_title(jun_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(jun_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('June Vegetables').appendTo(veges);
for (var i = 0; i < jun_veges.length; i++){
 var vege_txt=format_title(jun_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(jun_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------JULY-------------------------------
function jul_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#jul").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#jul").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('July Fruits').appendTo(fruits);

 for (var i = 0; i < jul_fruits.length; i++){
  var fruit_txt=format_title(jul_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(jul_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('July Vegetables').appendTo(veges);
for (var i = 0; i < jul_veges.length; i++){
 var vege_txt=format_title(jul_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(jul_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------AUGUST-------------------------------
function aug_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#aug").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#aug").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('August Fruits').appendTo(fruits);

 for (var i = 0; i < aug_fruits.length; i++){
  var fruit_txt=format_title(aug_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(aug_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('August Vegetables').appendTo(veges);
for (var i = 0; i < aug_veges.length; i++){
 var vege_txt=format_title(aug_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(aug_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------SEPTEMBER-------------------------------
function sep_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#sep").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#sep").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('September Fruits').appendTo(fruits);

 for (var i = 0; i < sep_fruits.length; i++){
  var fruit_txt=format_title(sep_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(sep_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('September Vegetables').appendTo(veges);
for (var i = 0; i < sep_veges.length; i++){
 var vege_txt=format_title(sep_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(sep_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------OCTOBER-------------------------------
function oct_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#oct").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#oct").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('October Fruits').appendTo(fruits);

 for (var i = 0; i < oct_fruits.length; i++){
  var fruit_txt=format_title(oct_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(oct_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('October Vegetables').appendTo(veges);
for (var i = 0; i < oct_veges.length; i++){
 var vege_txt=format_title(oct_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(oct_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------November-------------------------------
function nov_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#nov").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#nov").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('November Fruits').appendTo(fruits);

 for (var i = 0; i < nov_fruits.length; i++){
  var fruit_txt=format_title(nov_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(nov_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('November Vegetables').appendTo(veges);
for (var i = 0; i < nov_veges.length; i++){
 var vege_txt=format_title(nov_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(nov_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
//----------------------------------DECEMBER-------------------------------
function dec_list(){
	resetButtonColor();

	//Darker color on mouse leave/enter
	$("#dec").mouseover(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});


	$("#dec").mouseleave(function(){
  $(this).css({"background-color":"#315219","color":"white"});
		$(this).find("span").css({"background-color":"#315219","color":"white"});
});

 //remove calendar-content childs
 $("#fruit-vege-list").empty()

 //add fruits
 var fruits = $('<div/>',{"class":"fruits_list"})
	$('<h2/>').text('December Fruits').appendTo(fruits);

 for (var i = 0; i < dec_fruits.length; i++){
  var fruit_txt=format_title(dec_fruits[i]);
  //Add DOM element
  var fruit=$('<figure />',{"id":fruit_txt, "class":"item"}).appendTo(fruits);
  //Add picture to dom elem
  var pic= $("<img>", { src : 'pictures/'+fruit_txt+'.png'});
  pic.appendTo(fruit);
  //Add button for recipe and legend
  var button=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+fruit_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(dec_fruits[i]);
  button.appendTo(fruit);
 }


//add veges
var veges = $('<div/>',{"class":"veges_list"});
$('<h2/>').text('December Vegetables').appendTo(veges);
for (var i = 0; i < dec_veges.length; i++){
 var vege_txt=format_title(dec_veges[i]);
 //Add DOM element
 var vege=$('<figure />',{"id":vege_txt, "class":"item"}).appendTo(veges);
 //Add picture to dom elem
 var pic_vege= $("<img>", { src : 'pictures/'+vege_txt+'.png'});
 pic_vege.appendTo(vege);
 //Add button for recipe and legend
 var button_vege=$("<button>", { "class" : "fruit_btn", "onclick":"getRecipe('"+vege_txt+"','"+hit_number+"','"+diet_restriction+"','"+health_restriction+"')"}).text(dec_veges[i]);
 button_vege.appendTo(vege);
}

$("#fruit-vege-list").append(fruits,veges);

}
