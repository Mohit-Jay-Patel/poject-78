
  var images = [
    "father.png",
    "mother.jpeg",
    "brother.jpeg",
    "sister.jpeg",
    "book.jpeg"
   
   ];
   var reasons = [
    
    "Jay Patel",
    "Kavita Patel",
    "Mohit Patel",
    "Riya Patel",
    "My family book"
  ];
  
  
  var i = 0;
  
  function nextslide() 
  {  
      if (i>4){
      i=0;
    }
    document.getElementById("reasons").innerHTML = reasons[i] ;
    document.getElementById("album").src = images[i] ;
      i++;
    document.getElementById("audio").play();
    
  }
  