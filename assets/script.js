var theme=["main", "fog", "night"];

function changeTheme()
{

	var temp = document.getElementById("bg").classList.item(0);
	var part = temp.split('_')[2];
	
	document.getElementById("bg").classList.remove(temp);
	
	var temp = document.getElementById("greeting").classList.item(0);
	
	document.getElementById("greeting").classList.remove(temp);
	
	
	
	/*get elements by class name and remove class*/
	/*var i;
	var x = document.getElementsByClassName("section-head");
	for(i = 0; i<2; i++)
	{
		var theme_class = x[i].classList.item(0);
		console.log(x[i]);
		console.log(theme_class);
		x[i].classList.remove(theme_class);
	}*/


	
	
	
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
	
	document.getElementById("bg").classList.add("bg_theme_"+newtheme);
	document.getElementById("greeting").classList.add("greeting_theme_"+newtheme);
	
	/*var x = document.getElementsByClassName("section-head");
	for(i = 0; i<2; i++)
	{
		x[i].classList.add("header_text_theme_" + newtheme);
		console.log(x[i].classList.item(1));
	}*/
	
	
	
//note: classList.add is adding class at the end of the list. Index issue.

	
	
	
	
	
}

