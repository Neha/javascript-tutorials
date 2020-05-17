/*

1. Create List
2. Sort Price
3. Sort popularity
4. Item Add
5. Search

*/
var data = [
    {
        name: "apple",
        price: 150,
        popularity: 10
    },
    {
        name: "pine apple",
        price: 250,
        popularity: 3
    },
    {
        name: "kiwi",
        price: 50,
        popularity: 100
    },
    {
        name: "orange",
        price: 350,
        popularity: 5
    },
];
var searchmodule = (function () {
    var $ = document;
    var itemsContainer = $.getElementById("itemsContainer");
    var buttons = $.getElementsByTagName("button");
    var itemsCounter = $.querySelector(".itemCounterContainer h3");
    var searhContainer = $.getElementById("search");
    var fragmentHTML = "";
    var count = 0;
    var _data = "";
    var createListItems = function (data) {
        fragmentHTML = "";
        data.map(function (item, index) {
            fragmentHTML += "<li><span>" + item.name + "</span><span>" + item.price + "</span><span>" + item.popularity + "</span><span><button data-type=\"add\">ADD</button></span></li>";
        });
        itemsContainer.innerHTML = fragmentHTML;
        addItem();
    };
    var sortData = function () {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                if (this.hasAttribute("data-name")) {
                    if (this.getAttribute("data-name") === "price") {
                        data = data.sort(function (a, b) {
                            return a.price - b.price;
                        });
                    }
                    else if (this.getAttribute("data-name") === "popularity") {
                        data = data.sort(function (a, b) {
                            return a.popularity - b.popularity;
                        });
                    }
                    else {
                        //
                    }
                    createListItems(data);
                }
            });
        }
    };
    var addItem = function () {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                if (this.hasAttribute("data-type") &&
                    this.getAttribute("data-type") === "add") {
                    itemsCounter.innerHTML = "You have added " + ++count + " items";
                    this.setAttribute("disabled", true);
                }
            });
        }
    };
    var searchItem = function () {
        searhContainer.addEventListener("keyup", function () {
            var _this = this;
            _data = data.filter(function (item, index) {
                return item.name.includes(_this.value);
            });
            createListItems(_data);
        });
    };
    return {
        init: function () {
            // common functions call
            createListItems(data);
            sortData();
            searchItem();
        }
    };
})();
searchmodule.init();
