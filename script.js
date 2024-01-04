const year = document.getElementById('year');


function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById('nav_items').style.display = "none";
      document.getElementById('burger_menu').style.display = "block";
    } else {
        document.getElementById('nav_items').style.display = "flex";
        document.getElementById('burger_menu').style.display = "none";
    }
  }
  
  var x = window.matchMedia("(max-width: 1200px)")
  myFunction(x) 
  x.addListener(myFunction)


  // copyright year 
  const yearDate = new Date();
  year.innerText = yearDate.getFullYear();


