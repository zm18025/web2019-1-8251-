alert("これは情報学特講Ⅰの提出用サイトです");

	document.write('');
	function tabChange(){
	var tabobj = document.getElementsByTagName('a');
	for(var i=0; i < tabobj.length; i++){
	if(tabobj[i].className == 'tab1'){
	tabobj[i].onclick = function(){
	tab_h('tab1h','url(img/th1.png)');
	tab_b('tab1b');
	return false;
	}
	}else if(tabobj[i].className == 'tab2'){
	tabobj[i].onclick = function(){
	tab_h('tab2h','url(img/th1.png)');
	tab_b('tab2b');
	return false;
	}
	}else if(tabobj[i].className == 'tab3'){
	tabobj[i].onclick = function(){
	tab_h('tab3h','url(img/th1.png)');
	tab_b('tab3b');
	return false;
	}
	}else if(tabobj[i].className == 'tab4'){
	tabobj[i].onclick = function(){
	tab_h('tab4h','url(img/th1.png)');
	tab_b('tab4b');
	return false;
	}
	}else if(tabobj[i].className == 'tab5'){
	tabobj[i].onclick = function(){
	tab_h('tab5h','url(img/th1.png)');
	tab_b('tab5b');
	return false;
	}
	}
	}
	}
	function addEvent(init){
	if(window.addEventListener){
	window.addEventListener("load",init, false);
	}else if(window.attachEvent){
	window.attachEvent("onload",init);
	}
	}
	addEvent(function(){
	tabChange();
	tab_h('tab1h','url(img/th1.png)');
	tab_b('tab1b');
	});
	function tab_h(tabh,tabi){
	document.getElementById('tab1h').style.backgroundImage = 'url(img/th2.png)';
	document.getElementById('tab2h').style.backgroundImage = 'url(img/th2.png)';
	document.getElementById('tab3h').style.backgroundImage = 'url(img/th2.png)';
	document.getElementById('tab4h').style.backgroundImage = 'url(img/th2.png)';
	document.getElementById('tab5h').style.backgroundImage = 'url(img/th2.png)';
	if(tabh){
	document.getElementById(tabh).style.backgroundImage = tabi;
	}
	}
	function tab_b(tabb){
	document.getElementById('tab1b').style.display = 'none';
	document.getElementById('tab2b').style.display = 'none';
	document.getElementById('tab3b').style.display = 'none';
	document.getElementById('tab4b').style.display = 'none';
	document.getElementById('tab5b').style.display = 'none';
	if(tabb){
	document.getElementById(tabb).style.display = 'block';
	}
	}




