const counterForm=document.getElementById('counter-form');
const counterFormArea=document.getElementById('formArea');
const counterEl=document.getElementById('counter');

const counterTitleEl=document.getElementById('counter-title');
const timeElements=document.querySelectorAll('span');
const counterResetBtn=document.getElementById('counter-reset');

const complete = document.getElementById('complete');
const completeInfo=document.getElementById('complete-info');
const completeBtn=document.getElementById('complete-button');


const second=1000;
const minute = second * 60;
const hour= minute*60;
const day=hour*24;
let title;
let date;
let countDownActive;


let counterDate=document.getElementById('counter-date');

let today= new Date().toISOString().split('T')[0];
counterDate.setAttribute('min',today);
function updateDom(){


    countDownActive=setInterval(()=>{

        let now = new Date().getTime();
        let distance = countDownValue - now;
        const days=Math.floor(distance/day);
        const hours = Math.floor(distance%day/hour);
        const minutes=Math.floor(distance%hour/minute);
        const seconds=Math.floor(distance%minute/second);
            
        if(distance<0){
            counterEl.hidden=true;
            counterFormArea.hidden=true;
            complete.hidden=false;
            clearInterval(countDownActive);
            completeInfo.textContent=`${title} is finished on ${date}`;
        }
        else{

            timeElements[0].textContent=days;
            timeElements[1].textContent=hours;
            timeElements[2].textContent=minutes;
            timeElements[3].textContent=seconds;
            counterTitleEl.textContent=title;

            counterFormArea.hidden=true;
            counterEl.hidden=false;
        }
    },1000);
        }
    


let countDownValue=Date;

counterForm.addEventListener('submit',function updateCountDown(e){
    e.preventDefault();
    title=e.target[0].value;
    date=e.target[1].value;
    const savedCountdown={
        title:title,
        date:date,
    };
    localStorage.setItem('countdown',JSON.stringify(savedCountdown));
    console.log(title);
    console.log(date);
    
    if(date==""){
        alert("Select a date");
    }
    else{
        countDownValue = new Date(date).getTime();
        console.log(countDownValue);
    }

    updateDom();

});

function restoreCountDown(){
    if(localStorage.getItem('countdown')){
        counterFormArea.hidden=true;
        let countdownData=JSON.parse(localStorage.getItem('countdown'));
        title=countdownData.title;
        date=countdownData.date;
        countDownValue = new Date(date).getTime();
        updateDom();

    }
}

function reset(){
    
    counterEl.hidden=true;
    complete.hidden=true;
    clearInterval(countDownActive);
    title='';
    date='';
    counterFormArea.hidden=false;
}
counterResetBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);
restoreCountDown();
