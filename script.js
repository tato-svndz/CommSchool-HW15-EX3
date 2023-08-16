let ul = document.getElementById('ul');
let liTwo = document.createElement('li');
let liThree = document.createElement('li');
liTwo.innerHTML = '2';
liThree.innerHTML = '3';
ul.insertBefore(liTwo, ul.children[1]);
ul.insertBefore(liThree, ul.children[2]);