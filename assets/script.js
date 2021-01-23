var theme=["main", "fog", "night"];

function changeTheme()
{
	
	var temp = document.getElementById("bg").classList.item(0);
	document.getElementById("bg").classList.remove(temp);
	var part = temp.split('_')[2];
	
	var images = document.getElementByClassName("image");
	
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
	
	
	
	
	
}

