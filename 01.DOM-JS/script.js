/*
 tag:  document.getElementsByTagName()
 id: document.getElementById()
 class: document.getElementsByClassName()
 querySelector: document.querySelector()
 document.querySelectorAll()
*/

// tag: Access all the H1 and change the color to red

const $ = document;

// const headingLevelOne = $.getElementsByTagName('h1');

// for(let i = 0; i < headingLevelOne.length; i++){
//     headingLevelOne[1].style.color = 'red';
// }

// ClassName: Access all the class defined by 'heading' and change the color to red.
// const headingLevelOne = $.getElementsByClassName('heading');
// for(let i = 0; i < headingLevelOne.length; i++){
//     headingLevelOne[i].style.color = 'red';
// }

// ID: Access the ID heading and heading2 and change the color to red
// const headingLevelOne = $.getElementById('heading');
// const headingLevelTwo = $.getElementById('heading2');

// headingLevelOne.style.color = 'red';
// headingLevelTwo.style.color = 'red';

// querySelector: Access the H1, .heading, #heading2 , p span and change color to red

const headingLevelOne = $.querySelectorAll('h1');
for(let i = 0; i < headingLevelOne.length; i++){
    headingLevelOne[i].style.color = 'red';
}