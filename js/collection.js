

	window.onload = function(){
			var mainMenu = document.getElementsByClassName("scrowContain")[0];
			var search = document.getElementsByClassName("search")[0];
			var head = document.getElementsByClassName("head")[0];
			
			window.onscroll = function(){
			// var d = document.documentElement.scrollTop;
			var d = document.documentElement.scrollTop||document.body.scrollTop;
				if (d>200) {
					mainMenu.style.position = "fixed";
					search.style.display = "none";
					head.style.display = "none";
				}
				if(d < 200){
					mainMenu.style.position = "relative";
					search.style.display = "flex";
					head.style.display = "flex";
				}
			}

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