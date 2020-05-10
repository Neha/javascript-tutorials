/*

1. Create List
2. Sort Price
3. Sort popularity
4. Item Add
5. Search 

*/

let data = [
    {
        name: 'apple',
        price: 150,
        popularity : 10
    },
    {
        name: 'pine apple',
        price: 250,
        popularity : 3
    },
    {
        name: 'kiwi',
        price: 50,
        popularity : 100
    },
    {
        name: 'orange',
        price: 350,
        popularity : 5
    }
]

const $ = document;
const itemsContainer = $.getElementById('itemsContainer');
const buttons = $.getElementsByTagName('button');
const itemsCounter = $.querySelector('.itemCounterContainer h3');
const searhContainer = $.getElementById('search');
let fragmentHTML = '';
let count = 0;
let _data = '';

const createListItems = (data) => {
    fragmentHTML = '';
    data.map((item, index) => {
        fragmentHTML += `<li><span>${item.name}</span><span>${item.price}</span><span>${item.popularity}</span><span><button data-type="add">ADD</button></span></li>`
    })
    itemsContainer.innerHTML = fragmentHTML;
    addItem()
}

const sortData = () => {
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(this.hasAttribute('data-name')){
                if(this.getAttribute('data-name') === 'price'){
                   data = data.sort((a,b) => {
                         return a.price - b.price;
                    })
                }
                else if(this.getAttribute('data-name') === 'popularity')
            {
                data = data.sort((a,b) => {
                    return a.popularity - b.popularity;
               })
                }
                else{
                    //
                }
                createListItems(data);
            }
        })
    }
}


const addItem = () => {
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(this.hasAttribute('data-type') && this.getAttribute('data-type') === 'add'){
                
                    itemsCounter.innerHTML= `You have added ${++count} items`;
                    this.setAttribute('disabled', true);
                
            }
        });
}
    }
    
const searchItem = () =>{
    searhContainer.addEventListener('keyup', function(){
        _data = data.filter((item, index) => {
            return (item.name).includes(this.value);
        })
        createListItems(_data);
    })
}


createListItems(data);
sortData();
searchItem();
