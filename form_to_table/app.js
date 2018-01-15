


 function checkValue() {
 	     fname = document.getElementById('fname').value;
 	     Lname = document.getElementById('lname').value;
         addr = document.getElementById('addr').value;
 	  var isEmpty = false;
 	if( fname === ""){
 		alert("enter first name");
        isEmpty = true;
 		
 	}
 	  else if  ( Lname === ""){
 		alert("enter last name");
 		isEmpty = true;
 		
 	}
 	if  ( addr === ""){
 		alert("enter address");
 		isEmpty = true;
 		
 	}
 	return isEmpty;
 	
 }


function add() {


var table = document.getElementById('table');
if(!checkValue()){
   var row = table.insertRow(table.length);
  var  cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);

  fname = document.getElementById('fname').value;
  Lname = document.getElementById('lname').value;
  addr = document.getElementById('addr').value;


 cell1.innerHTML = fname;
 cell2.innerHTML = Lname;
 cell3.innerHTML = addr;
}
};





// function selectHtmlRow() {
// 	// body...
// 	var table, rIndex = document.getElementById('table');
//      for( var i = 1; i<table.rows.length; i++){
// 	table.rows[i].onclick = function(){
// 		rIndex = this.rowIndex;

// 		console.log(rindex);
// 	// 	document.getElementById('fname').value = this.cell1(0).innerHTML;
// 	// document.getElementById('lname').value = this.cell2(1).innerHTML;
// 	// document.getElementById('addr').value = this.cell3(2).innerHTML;
// };
// }
// }
// window.selectHtmlRow();



