const second = document.getElementById('second');
const minut = document.getElementById('minut');
const hours = document.getElementById('hours');

let h,m,s;

function setTime(){
    let data = new Date();
    h=data.getHours();
    m=data.getMinutes();
    s=data.getSeconds();
}

function setHends(){
    if (h>12){
        h=h-12;
    }
    let hRotaion = h*30+m*0.5;
    let mRotaion = 6*m;
    let sRotaion = 6*s;

    hours.style.transform = `rotate(${hRotaion}deg)`;
    minut.style.transform = `rotate(${mRotaion}deg)`;
    second.style.transform = `rotate(${sRotaion}deg)`;

}
setInterval(() => {
    setTime();
    setHends();
}, 1000);