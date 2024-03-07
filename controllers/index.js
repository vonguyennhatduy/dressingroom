

const openTab = (tabID) => {
    let tabList = document.getElementsByClassName('tab-pane');
    for(let i = 0; i < tabList.length; i++){
        tabList[i].classList.remove('show','active');
    }

    let tabOpen = document.getElementById(tabID);
    tabOpen.classList.add('show','active');
}




