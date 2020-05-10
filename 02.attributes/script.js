/*
Attributes
    getAttribute(ATTRIBUTENAME);
    setAttribute(ATTRIBUTE-NAME, ATTRIBUTE-VALUE);
    removeAttribute(ATTRIBUTE-NAME);
    hasAttribute(ATTRIBUTE-NAME);
*/

const $ = document;

const cards = $.querySelectorAll('div');
const headings = $.querySelectorAll('div > h1');

// getAttribute
for(let  i =0 ; i < cards.length; i++){
    cards[i].style.backgroundColor = cards[i].getAttribute('data-color');
}

// setAttribute
for( let i = 0; i < headings.length; i++){
    headings[i].setAttribute('data-value',i);
}

for(let  i =0 ; i < cards.length; i++){
    if(cards[i].hasAttribute('data-color')){
        cards[i].removeAttribute('data-color');
    }
    else{
        console.log('attribute not found...')
    }
}

