

const Necklace = [
    {
        id: 1,
        img: `<img width="500" height="1000" src="../assets/images/necklaces/necklace1.png" />`
    },
    {
        id: 2,
        img: `<img width="500" height="1000" src="../assets/images/necklaces/necklace2.png" />`
    },
    {
        id: 3,
        img: `<img width="500" height="1000" src="../assets/images/necklaces/necklace3.png" />`
    },
   
]

const NECKLACE = (btnID) => {
    let btnIDNumber = btnID * 1;

    let search = Necklace.find((x) => x.id === btnIDNumber);

    document.getElementById('necklace').innerHTML = search.img;
}