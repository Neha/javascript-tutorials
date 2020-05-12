const tabs = (() => {

    const $ = document;
    const tabsItem =  $.getElementsByTagName('li');
    const tabsDescription  = $.querySelectorAll('.tabsContent > div');

    const createTabs = () => {
        for(let i = 0; i < tabsItem.length; i++){
            tabsItem[i].addEventListener('click', function(){
                const currentTab = i;

                for(let j =0; j < tabsDescription.length; j++){
                    tabsDescription[j].style.display = 'none'

                    if(currentTab === j){
                        tabsDescription[j].style.display = 'block';
                    }
                }
                
                // const tabsDescriptionArr =  [...tabsDescription];

                // tabsDescriptionArr.forEach((element, index) => {
                //     element.style.display = 'none';

                //     if(currentTab === index){
                //         element.style.display = 'block';

                //     }
                // })

                
            })
        }
    }

    return{
        init: () => {
            createTabs();
        }
    }

})();

tabs.init();