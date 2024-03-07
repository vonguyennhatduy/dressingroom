
const TopClothes = [
    {
        id: 1,
        img: `<img width="250" height="500" src="../assets/images/clothes/topcloth1.png" />`,
    },

    {
        id: 2,
        img: `<img width="250" height="500" src="../assets/images/clothes/topcloth2.png" />`
    },

    {
        id: 3,
        img: `<img width="250" height="500" src="../assets/images/clothes/topcloth3.png" />`
    },

    {
        id: 4,
        img: `<img width="250" height="500" src="../assets/images/clothes/topcloth4.png" />`
    },

    {
        id: 5,
        img: `<img width="250" height="500" src="../assets/images/clothes/topcloth5.png" />`
    },

    {
        id: 6,
        img: `<img width="250" height="500" src="../assets/images/clothes/topcloth6.png" />`
    },
]


const Top = (btnID) => {
    let btnIDNumber = btnID * 1;

    let search = TopClothes.find((x) => x.id === btnIDNumber);

    document.getElementById('topclothes').innerHTML = search.img;
}

