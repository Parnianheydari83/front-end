// const h1 = document.getElementById('main-title');

// h1.textContent = 'some new title';
// h1.style.color= 'white';
// h1.style.backgroundColor = 'black';


// const li = document.querySelector('li:last-of-type')
// li.textContent = li.textContent + '###'

// const body = document.body;
// body.quer
// // const listItemElements = document.querySelectorAll('li')
// const listItemElements = document.getElementsByTagName('li')

// for(const listItemEl of listItemElements){
//     console.dir(listItemEl);
// }

/////////////////////////////////////////////////////////////////////
const list = document.querySelector('ul');

const newLi = document.createElement('li');
list.appendChild(newLi);
newLi.textContent = 'item 4';