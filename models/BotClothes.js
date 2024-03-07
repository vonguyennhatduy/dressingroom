
const BotClothes = [
    {
        id: 1,
        img: `<img width="250" height="500" src="../assets/images/clothes/botcloth1.png" />`
    },
    {
        id: 2,
        img: `<img width="250" height="500" src="../assets/images/clothes/botcloth2.png" />`
    },
    {
        id: 3,
        img: `<img width="250" height="500" src="../assets/images/clothes/botcloth3.png" />`
    },
    {
        id: 4,
        img: `<img width="250" height="500" src="../assets/images/clothes/botcloth4.png" />`
    },
    {
        id: 5,
        img: `<img width="250" height="500" src="../assets/images/clothes/botcloth5.png" />`
    },
]

const Bottom = (btnID) => {
    let btnIDNumber = btnID * 1;

    let search = BotClothes.find((x) => x.id === btnIDNumber);

    document.getElementById('botclothes').innerHTML = search.img;
}