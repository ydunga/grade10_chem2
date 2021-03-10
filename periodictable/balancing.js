function myFunction() {
    var  inpObj = document.getElementById("element1");
  var inpObj2 = document.getElementById("element2");
  var inpObj3 = document.getElementById("element3");
  var inpObj4
 = document.getElementById("element4");
  
  if((inpObj.value == 3) && (inpObj2.value == 4) && (inpObj4.value == 4)) {
      document.getElementById('err').innerHTML = 'correct'
     
    }
    else {
      document.getElementById('err').innerHTML = 'try again';
    }
    
  }