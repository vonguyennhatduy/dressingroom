

const Background = [
    {
        id: 1,
        img: `<img width="900" height="1500" src="../assets/images/background/background1.jpg" />`
    },
    {
        id: 2,
        img: `<img width="900" height="1500" src="../assets/images/background/background2.jpg" />`
    },
    {
        id: 3,
        img: `<img width="900" height="1500" src="../assets/images/background/background3.jpg" />`
    },
    {
        id: 4,
        img: `<img width="900" height="1500" src="../assets/images/background/background4.jpg" />`
    },
    {
        id: 5,
        img: `<img width="900" height="1500" src="../assets/images/background/background5.jpg" />`
    },
    {
        id: 6,
        img: `<img width="900" height="1500" src="../assets/images/background/background6.jpg" />`
    },
    {
        id: 7,
        img: `<img width="900" height="1500" src="../assets/images/background/background7.jpg" />`
    },
   
]

const BACKGROUND = (btnID) => {
    let btnIDNumber = btnID * 1;

    let search = Background.find((x) => x.id === btnIDNumber);

    document.getElementById('background').innerHTML = search.img;
}