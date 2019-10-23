function change(index) {
    var p = document.getElementById('section');
    console.log(p)
    switch (index) {
      case 1:
        p.innerHTML='<iframe width=100% height=100% src="https://www.youtube.com/embed/5Wn85Ge22FQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        p.style.backgroundColor = '#F7CAC9';
        break;

      case 2:
        p.innerHTML='<iframe width=100% height=100% src="https://www.youtube.com/embed/F9CrRG6j2SM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        p.style.backgroundColor = '#F7CAC9';
        break;

      case 3:
        p.innerHTML='<iframe width=100% height=100% src="https://www.youtube.com/embed/Zll7O1v63aY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        p.style.backgroundColor = '#F7CAC9';
        break;
      case 4:
        p.innerHTML='<iframe width=100% height=100% src="https://www.youtube.com/embed/4gX_p1VkgA4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        p.style.backgroundColor = '#F7CAC9';
        break;
      case 5:
        p.innerHTML='<iframe width=100% height=100% <iframe width="560" height="315" src="https://www.youtube.com/embed/6eEZ7DJMzuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        p.style.backgroundColor = '#F7CAC9';
        break;
    }
  }