function countDigit(n){
    let l = 0;
    let cnt = 0;
    if(n==0) return 1;
    while(n>0){
        l = n%10;
        cnt++;
        n = Math.floor(n/10);
    }
    return cnt;
}
let min = 0;
let sec= 0;
let stopWatchmin = document.getElementById("min");
let stopWatchsec = document.getElementById("sec");
let strt_btn = document.getElementById("start");
let reset_btn = document.getElementById("Reset");
stopWatchmin.innerText = `0${min}`;
stopWatchsec.innerText = `0${sec}`;
let clickCount = 0;
let intervalID;
strt_btn.addEventListener("click",() => {
    clickCount++;
    if(clickCount == 1){

        strt_btn.innerText = "Pause";

        intervalID = setInterval(() => {
            sec += 1;
            if(sec != 60){
                if(countDigit(sec) == 1) stopWatchsec.innerText = `0${sec}`
                else stopWatchsec.innerText = `${sec}`
                if(countDigit(min) == 1) stopWatchmin.innerText = `0${min}`
                else stopWatchmin.innerText = `${min}`
            }
            else{
                sec = 0;
                min += 1;
                if(countDigit(sec) == 1) stopWatchsec.innerText = `0${sec}`
                else stopWatchsec.innerText = `${sec}`
                if(countDigit(min) == 1) stopWatchmin.innerText = `0${min}`
                else stopWatchmin.innerText = `${min}`
            }
            
        } , 500);
    }
    else if(clickCount == 2){
        strt_btn.innerText = "Resume";
        clearInterval(intervalID);
        clickCount = 0;
    }
})

reset_btn.addEventListener("click",() => {
    min = 0;
    sec = 0;
    stopWatchmin.innerText = `0${min}`;
    stopWatchsec.innerText = `0${sec}`;
    strt_btn.innerText = "Start";
    clearInterval(intervalID);
})