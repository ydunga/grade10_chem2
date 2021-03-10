document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("Text", event.target.id);
    
    // Output some text when starting to drag the p element
  
  });
  
  
  
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  
  
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "grid-item2") {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });
  
  