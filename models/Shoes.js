

const Shoe = [
    {
        id: 1,
        img: `<img width="500" height="1000" src="../assets/images/shoes/shoes1.png" />`
    },
    {
        id: 2,
        img: `<img width="500" height="1000" src="../assets/images/shoes/shoes2.png" />`
    },
    {
        id: 3,
        img: `<img width="500" height="1000" src="../assets/images/shoes/shoes3.png" />`
    },
    {
        id: 4,
        img: `<img width="500" height="1000" src="../assets/images/shoes/shoes4.png" />`
    },
    {
        id: 5,
        img: `<img width="500" height="1000" src="../assets/images/shoes/shoes5.png" />`
    },
]

const SHOE = (btnID) => {
    let btnIDNumber = btnID * 1;

    let search = Shoe.find((x) => x.id === btnIDNumber);

    document.getElementById('shoes').innerHTML = search.img;
}