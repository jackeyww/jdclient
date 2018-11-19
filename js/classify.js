
    window.onload = function(){
    	var w=document.documentElement?document.documentElement.clientHeight:document.body.clientHeight;
    	var menuContain = document.getElementsByClassName("menuContain")[0];
    	var search = document.getElementsByClassName("search")[0];
    	var footmenu = document.getElementsByClassName("footmenu")[0];
    	menuContain.style.height = w*0.888+"px";
    	// search.style.height = w*0.055+"px";
    	// footmenu.style.height = w*0.06+"px";
    	 
    	var menu = document.getElementsByClassName("windowMenu")[0];
    	var butt = document.getElementsByClassName("menu")[0];

    	butt.onclick = function(e){
			e = e || event;
			e.cancelBubble = true;//阻止事件由子元素向父元素冒泡。
			if(menu.style.display=="block"){
				menu.style.display ="none";
			}else{
				menu.style.display ="block";
			}
		}
		document.onclick = function(){
			menu.style.display = "none";
		}
    }
	function choice(num){
		var leftListItems = document.getElementsByClassName("listItem");
		var publayouts = document.getElementsByClassName("publayout");
		var leftMenu = document.getElementsByClassName("leftMenu")[0];
			for(var i=0;i<leftListItems.length;i++){
				
				if(leftListItems[i] == document.getElementById("static"+num)){
					leftListItems[i].style.color = "#E93B3D";
					leftListItems[i].style.background = "#fff";
					publayouts[i].style.display = "block";
				}else{
					leftListItems[i].style.color = "#111";
					leftListItems[i].style.background = "#F8F8F8";
					publayouts[i].style.display = "none";
				}
			}
			
	}

	function windowmenu(){
		


	}