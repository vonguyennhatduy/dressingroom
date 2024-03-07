

const Bags = [
    {
        id: 1,
        img: `<img width="500" height="1000" src="../assets/images/handbags/handbag1.png" />`
    },
    {
        id: 2,
        img: `<img width="500" height="1000" src="../assets/images/handbags/handbag2.png" />`
    },
    {
        id: 3,
        img: `<img width="500" height="1000" src="../assets/images/handbags/handbag3.png" />`
    },
   
]

const HANDBAG = (btnID) => {
    let btnIDNumber = btnID * 1;

    let search = Bags.find((x) => x.id === btnIDNumber);

    document.getElementById('handbag').innerHTML = search.img;
}