'use strict';
	function gausSumme(){
		var anfangsZahl = new Number (document.getElementById("anfangsZahl").value);
		var endZahl = new Number (document.getElementById("endZahl").value);
		var x = endZahl;
		if(endZahl<anfangsZahl){
			endZahl=anfangsZahl;
			anfangsZahl= x;
		}
		console.log("anfangsZahl; "+anfangsZahl+" endZahl: "+endZahl);
		var summe = new Number(0);
		for (var i= anfangsZahl; i<= endZahl; i++){summe = summe + i;}
		var message = "<h2> Die Summe aller Zahlen von " + anfangsZahl+ " bis " +endZahl+ " ist: " + summe +"</h2>";
		
		document.getElementById("sta").innerHTML = message; 
	}
	
	function clearLast(){
		document.getElementById("sta").innerHTML = " "; 
	}