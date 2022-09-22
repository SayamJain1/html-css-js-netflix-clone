const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');


function selectItem(e) {
    removeBorder()
    removeShow()
   // Add border to current tab
    this.classList.add('tab-border')

    //grab content item from DOM
    const tabContentItemDOM = document.querySelector(`#${this.id}-content`)

    //Add show class 
    tabContentItemDOM.classList.add('show')
}

//removing border 
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'))
}


// LIsten for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))