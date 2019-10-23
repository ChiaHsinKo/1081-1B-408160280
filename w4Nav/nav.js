function changeNav(index) {
  var p = document.getElementById('section');
  switch (index) {
    case 1:
      p.innerHTML='<iframe width=100% height=100% src="./W1/Intro/intro.html">';
      p.style.backgroundColor = 'azure';
      break;

    case 2:
      p.innerHTML='<iframe width=100% height=100% src="./W1/Pokemon/pokemon.html">';
      p.style.backgroundColor = 'azure';
      break;

    case 3:
      p.innerHTML='<iframe width=100% height=100% src="./W2/Blog/blog.html">';  
      p.style.backgroundColor = 'azure';
      break;

    case 4:
      p.innerHTML='<iframe width=100% height=100% src="./W2/ImageGallery/imageGallery.html">';  
      p.style.backgroundColor = 'azure';
      break;

    case 5:
      p.innerHTML='<iframe width=100% height=100% src="./W3/Div/div.html">';  
      p.style.backgroundColor = 'azure';
      break;

    case 6:
      p.innerHTML='<iframe width=100% height=100% src="./W4/MV/MV.html">';  
      p.style.backgroundColor = 'azure';
      break;
  }
}