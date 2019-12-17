/*Function for showing the page without re-load*/
function show_page(id){
  var sections = document.getElementsByTagName('section');
  
  var nOfSections = sections.length;
  for (var i = 0; i<nOfSections; i++){
    if(sections[i].id == id) sections[i].className = "normal";
    else sections[i].className = "hide";
  }
}