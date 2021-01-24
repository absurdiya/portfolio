var theme=["main", "fog", "night"];

function changeTheme()
{

	var temp = document.getElementById("bg").classList.item(0);
	var part = temp.split('_')[2];
	
	//document.getElementById("bg").classList.remove(temp);
	//var temp = document.getElementById("greeting").classList.item(0);
	//document.getElementById("greeting").classList.remove(temp);
	/*get elements by class name and remove class*/
	//var images = document.getElementByClassName("image");
	
	var newtheme = "";
	if(part == "main")
	{
		newtheme = "fog";
		
		}
	else if(part == "fog")
	{
		newtheme = "night";
		}
	else
	{
		newtheme = "main";
		}
	
	//document.getElementById("bg").classList.add("bg_theme_"+newtheme);
	//document.getElementById("greeting").classList.add("greeting_theme_"+newtheme);
	/*var x = document.getElementsByClassName("section-head");
	for(i = 0; i<2; i++)
	{
		x[i].classList.add("header_text_theme_" + newtheme);
		console.log(x[i].classList.item(1));
	}*/
	
	document.getElementById("bg").className = "bg_theme_" + newtheme;
	document.getElementById("greeting").className = "greeting_theme_" + newtheme;
	document.getElementById("moodbutton").className = "button button_theme_" + newtheme;
	var i;
	var x = document.getElementsByClassName("section-head");
	for(i = 0; i<2; i++)
	{
		x[i].className = "section-head header_text_theme_" + newtheme;
	}
	
	var x = document.getElementsByClassName("prev-link");
	for(i = 0; i<2; i++)
	{
		x[i].className = "prev-link card_theme_" + newtheme;
	}
	
	var x = document.getElementsByClassName("preview-element");
	for(i = 0; i<3; i++)
	{
		x[i].className = "preview-element card_theme_" + newtheme;
	}
	
	/******Modify Images***********/
	
	
//note: classList.add is adding class at the end of the list. Index issue.

	
	
	
	
	
}

