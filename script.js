const second=document.querySelector('#second');
const minute=document.querySelector('#minute');
const hour=document.querySelector('#hour');

const digitHour=document.querySelector('.hh');
const digitMin=document.querySelector('.mn');
const digitSec=document.querySelector('.sc');
const ampm=document.querySelector('.ampm');

setInterval(setTime)

function setTime(){
    const now=new Date();
    let hh=now.getHours() * 30;
    let mn=now.getMinutes() * 6;
    let ss=now.getSeconds() * 6;

    hour.style.transform=`rotateZ(${hh + (mn/12)}deg)`;
    minute.style.transform=`rotateZ(${mn}deg)`;
    second.style.transform=`rotateZ(${ss}deg)`;

    // Digital Clock
    let digithr=now.getHours();
    let digitmn=now.getMinutes();
    let digitsc=now.getSeconds();
   let am= digithr > 12 ? 'PM' : 'AM';
    if(digithr>12){digithr=digithr - 12;
    }

    digitHour.innerHTML=(digithr < 10 ? '0' + digithr : digithr );
    digitMin.innerHTML=(digitmn < 10 ? '0' + digitmn : digitmn );
    digitSec.innerHTML=(digitsc < 10 ? '0' + digitsc : digitsc );
    ampm.innerHTML=am;

    
}