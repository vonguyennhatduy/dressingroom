

const Hairstyle = [
    {
        id: 1,
        img: `<img width="1000" height="1000" src="../assets/images/hairstyle/hairstyle1.png" />`
    },
    {
        id: 2,
        img: `<img width="1000" height="1000" src="../assets/images/hairstyle/hairstyle2.png" />`
    },
    {
        id: 3,
        img: `<img width="1000" height="1000" src="../assets/images/hairstyle/hairstyle3.png" />`
    },
   
]

const HAIRSTYLE = (btnID) => {
    let btnIDNumber = btnID * 1;

    let search = Hairstyle.find((x) => x.id === btnIDNumber);

    document.getElementById('hairstyle').innerHTML = search.img;
}